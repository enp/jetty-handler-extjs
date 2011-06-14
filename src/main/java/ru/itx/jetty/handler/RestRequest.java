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

import java.util.Collections;
import java.util.Map;

public class RestRequest {

	private String method;
	private String path;
	private Integer id;
	private Map<String,Object> params;

	public RestRequest() {}

	public RestRequest(String method, String path, Integer id, Map<String,Object> params) {
		this.method = method;
		this.path = path;
		this.id = id;
		this.params = params;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Map<String, Object> getParams() {
		return Collections.unmodifiableMap(params);
	}

	public void setParams(Map<String, Object> params) {
		this.params = params;
	}

	public void addParam(String key, String value) {
		params.put(key, value);
	}

	public String toString() {
		return "RestRequest {"+method+":"+path+":"+id+":"+params+"}";
	}
}
