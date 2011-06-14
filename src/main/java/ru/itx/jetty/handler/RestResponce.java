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
import java.util.HashMap;
import java.util.Map;

public class RestResponce {

	private boolean success = true;
	private Map<String,Object> data = new HashMap<String,Object>();
	private String message;

	public RestResponce() {}

	public RestResponce(boolean success, Map<String,Object> data, String message) {
		this.success = success;
		this.data = data;
		this.message = message;
	}

	public RestResponce(Map<String, Object> data, String message) {
		this.data = data;
		this.message = message;
	}

	public RestResponce(Map<String, Object> data) {
		this.data = data;
	}

	public RestResponce(String message) {
		this.success = false;
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public Map<String,Object> getData() {
		return Collections.unmodifiableMap(data);
	}

	public void setData(Map<String,Object> data) {
		this.data.putAll(data);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String toString() {
		return "RestResponce {"+success+":"+data+":"+message+"}";
	}
}
