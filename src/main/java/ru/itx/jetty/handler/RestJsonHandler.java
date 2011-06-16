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

import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.Map;

public class RestJsonHandler extends RestHandler {

	private ObjectMapper om = new ObjectMapper();
	private JsonFactory jf = new JsonFactory();

	public RestJsonHandler() {}

	public RestJsonHandler(String prefix) {
		super(prefix);
	}

	protected Map<String,Object> read(InputStream is) throws IOException {
		return om.readValue(is, Map.class);
	}

	protected void write(RestResponce data, Writer writer) throws IOException {
		om.writeValue(jf.createJsonGenerator(writer), data);
	}

	protected String getContentType() {
		return "application/json;charset=utf-8";
	}
}
