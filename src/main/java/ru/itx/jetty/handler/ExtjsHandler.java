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
import org.eclipse.jetty.server.handler.ResourceHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ExtjsHandler extends ResourceHandler {

	public ExtjsHandler() {
		setDirectoriesListed(true);
		setWelcomeFiles(new String[]{"index.html"});
		setResourceBase(getClass().getClassLoader().getResource("ru/itx/jetty/handler").toExternalForm());
	}

	public void handle(String target, Request baseRequest, HttpServletRequest request, HttpServletResponse response)
	throws IOException, ServletException {
		if (target.startsWith("/extjs")) {
			super.handle(target, baseRequest, request, response);
		}
	}
}
