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

import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.handler.AbstractHandler;
import org.eclipse.jetty.util.log.Log;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public abstract class RestHandler extends AbstractHandler {

	private Pattern pattern = Pattern.compile("^(.*)/(\\d+)$");
	private String prefix = "/rest/";

	protected abstract Map<String,Object> read(InputStream is) throws IOException;

	protected abstract void write(RestResponce data, Writer writer) throws IOException;

	protected abstract String getContentType();

	public RestHandler() {}

	public RestHandler(String prefix) {
		this.prefix = prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public void handle(String target, Request baseRequest,
		HttpServletRequest httpRequest, HttpServletResponse httpResponse) throws IOException, ServletException {

		if (target.startsWith(prefix)) {

			RestRequest request = new RestRequest();
			RestResponce responce = new RestResponce();

			request.setMethod(httpRequest.getMethod());

			request.setPath(target.replace(prefix,""));
			Matcher matcher = pattern.matcher(request.getPath());
			if (matcher.find()) {
				request.setPath(matcher.group(1));
				request.setId(Integer.parseInt(matcher.group(2)));
			}

			if (request.getMethod().equals("GET")) {
				for(Object parameterName : httpRequest.getParameterMap().keySet())
					request.addParam(parameterName.toString(), httpRequest.getParameter(parameterName.toString()));
			} else if (request.getMethod().equals("POST") || request.getMethod().equals("PUT")) {
				request.setParams(read(httpRequest.getInputStream()));
			}

			try {
				handle(request, responce);
			} catch (Exception e) {
				responce.setSuccess(false);
				responce.setMessage(e.getMessage());
			}
			httpResponse.setContentType(getContentType());
			httpResponse.setStatus(HttpServletResponse.SC_OK);
			baseRequest.setHandled(true);
			write(responce, httpResponse.getWriter());

			Log.debug("RestHandler -> " + request + " <- " + responce);
		}
	}

	protected void handle(RestRequest request, RestResponce responce) throws Exception {
		String method = request.getMethod();
		if (method.equals("GET"))
			get(request, responce);
		else if (method.equals("POST"))
			post(request, responce);
		else if (method.equals("PUT"))
			put(request, responce);
		else if (method.equals("DELETE"))
			delete(request, responce);
		else
			throw new Exception("Unknown method "+method);
	}

	protected void get(RestRequest request, RestResponce responce) throws Exception {}
	protected void post(RestRequest request, RestResponce responce) throws Exception {}
	protected void put(RestRequest request, RestResponce responce) throws Exception {}
	protected void delete(RestRequest request, RestResponce responce) throws Exception {}
}
