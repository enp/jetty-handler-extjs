/*
 * Copyright (c) 2010 Eugene Prokopiev <enp@itx.ru>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ru.itx.jetty.handler;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;

public class ExtjsApplication {

	public static void main(String[] args) throws Exception {

		Server server = new Server(8080);

		ExtjsHandler handler = new ExtjsHandler();

		HandlerList handlers = new HandlerList();
		handlers.setHandlers(new Handler[] { handler, new DefaultHandler() });
		server.setHandler(handlers);

		server.start();
		server.join();
	}
}
