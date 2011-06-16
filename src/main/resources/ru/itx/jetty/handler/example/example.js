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
Ext.onReady(function(){

	Ext.define('modelThings', {
		extend: 'Ext.data.Model',
		fields: ['id', 'name', {name:'createDate', type:'date', dateFormat:'time'}, {name:'weight', type: 'float'}]
	});

	Ext.create('Ext.data.Store', {
		storeId:'storeThings',
		model: 'modelThings',
		autoLoad: true,
		pageSize: 5,
		proxy: {
			type: 'ajax',
			url: '/rest/things',
			reader: {
				type: 'json',
				root: 'data'
			}
		}
	});

	Ext.create('Ext.container.Viewport', {
		padding: 5,
		layout: 'fit',
		items: [{
			id: 'gridThings',
			xtype: 'grid',
			title: 'Things',
			store: Ext.data.StoreManager.lookup('storeThings'),
			sortableColumns: false,
			columns: [
				{text: 'ID', dataIndex: 'id', flex: 2, menuDisabled: true },
				{text: 'Name', dataIndex: 'name', flex: 4, menuDisabled: true },
				{text: 'Create date', dataIndex: 'createDate', xtype: 'datecolumn', format: 'Y-m-d H:i:s.u T', flex: 3, menuDisabled: true },
				{text: 'Weight', flex: 2, dataIndex: 'weight', align: 'right', menuDisabled: true }
			],
			dockedItems: [{
				xtype: 'pagingtoolbar',
				store: Ext.data.StoreManager.lookup('storeThings'),
				dock: 'bottom',
				displayInfo: true
			}]
		}]
	});

	Ext.getCmp('gridThings').on('selectionchange', function(sm, record) {
		if (record.length > 0)
			console.log('Thing with id ['+record[0].get('id')+'] is selected');
		else
			console.log('No thing is selected');
	});

});
