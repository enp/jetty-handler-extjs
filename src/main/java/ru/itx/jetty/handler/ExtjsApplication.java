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

public class ExtjsApplication {

	public static void main(String[] args) throws Exception {

		System.setProperty("org.eclipse.jetty.util.log.DEBUG", "true");

		final Server server = new Server(8080);

		HandlerList handlers = new HandlerList();
		handlers.setHandlers(new Handler[] { new RestJsonHandler(), new ExtjsHandler(), new DefaultHandler() });
		server.setHandler(handlers);

		server.start();
		Runtime.getRuntime().addShutdownHook(new Thread() {
			public void run() {
				try { server.stop(); } catch (Exception e) { e.printStackTrace(); }
			}
		});
		server.join();
	}
}
