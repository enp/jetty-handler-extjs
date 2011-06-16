/*
 * Copyright 2011 Eugene Prokopiev <enp@itx.ru>
 *
 * This file is part of jetty-hahdler-extjs.
 *
 * jetty-hahdler-extjs is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * jetty-hahdler-extjs is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with jetty-hahdler-extjs. If not, see <http://www.gnu.org/licenses/>.
 *
 */
package ru.itx.jetty.handler;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;

import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.*;

public class ExtjsExample {

	private class Thing {

		private int id;
		private String name;
		private Date createDate;
		private float weight;

		private Thing() {
			Random random = new Random(System.currentTimeMillis());
			this.id = Math.abs((int)System.currentTimeMillis());
			this.name = new BigInteger(130, random).toString(32);
			this.createDate = new Date();
			this.weight = random.nextFloat()*100;
		}

		public int getId() {
			return id;
		}
		public String getName() {
			return name;
		}
		public Date getCreateDate() {
			return createDate;
		}
		public float getWeight() {
			return weight;
		}
		public void setName(String name) {
			this.name = name;
		}
		public void setCreateDate(Date createDate) {
			this.createDate = createDate;
		}
		public void setWeight(float weight) {
			this.weight = weight;
		}
		public String toString() {
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss SSS");
			return "Thing {"+id+":"+name+":"+format.format(createDate)+":"+weight+"}";
		}
	}

	private List<Thing> things = Collections.synchronizedList(new ArrayList<Thing>());

	private Server server;

	public ExtjsExample() throws Exception {

		for (int i=0; i<10; i++) {
			things.add(new Thing());
			Thread.sleep(3);
		}

		System.setProperty("org.eclipse.jetty.util.log.DEBUG", "true");
		server = new Server(8080);

		HandlerList handlers = new HandlerList();

		ResourceHandler resourceHandler = new ResourceHandler();
		resourceHandler.setWelcomeFiles(new String[]{"index.html"});
		resourceHandler.setResourceBase(getClass().getClassLoader()
			.getResource("ru/itx/jetty/handler/example").toExternalForm());

		RestJsonHandler restJsonHandler = new RestJsonHandler("/rest/things") {
			private Thing findThing(Integer id) {
				for (Thing thing : things)
					if (thing.getId() == id)
						return thing;
				return null;
			}
			protected void get(RestRequest request, RestResponce responce) throws Exception {
				if (request.getId() == null) {
					Object data;
					try {
						int start = Integer.parseInt(request.getParam("start").toString());
						int limit = Integer.parseInt(request.getParam("limit").toString());
						int end = Math.min(start+limit, things.size());
						data = things.subList(start, end);
						responce.setTotal(things.size());
					} catch (Exception e) {
						data = things;
					}
					responce.setData(data);
				} else {
					Thing thing = findThing(request.getId());
					if (thing != null)
						responce.setData(thing);
				}
			}
			protected void post(RestRequest request, RestResponce responce) throws Exception {
				Thing thing = new Thing();
				things.add(thing);
				responce.setData(thing);
			}
			protected void put(RestRequest request, RestResponce responce) throws Exception {
				Thing thing = findThing(request.getId());
				if (thing != null) {
					thing.setName(request.getParam("name").toString());
					responce.setData(thing);
				}
			}
			protected void delete(RestRequest request, RestResponce responce) throws Exception {
				Thing thing = findThing(request.getId());
				if (thing != null)
					things.remove(thing);
			}
		};

		handlers.setHandlers(new Handler[] {
			resourceHandler, restJsonHandler, new ExtjsHandler(), new DefaultHandler()
		});
		server.setHandler(handlers);

		server.start();
		Runtime.getRuntime().addShutdownHook(new Thread() {
			public void run() {
				try { server.stop(); } catch (Exception e) { e.printStackTrace(); }
			}
		});
		server.join();
	}

	public static void main(String[] args) throws Exception {
		new ExtjsExample();
	}
}
