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
		autoSync: true,
		pageSize: 5,
		proxy: {
			type: 'rest',
			url: '/rest/things',
			reader: {
				type: 'json',
				root: 'data'
			},
			writer: {
				type: 'json'
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
				{text: 'Name', dataIndex: 'name', field: 'textfield', flex: 4, menuDisabled: true },
				{text: 'Create date', dataIndex: 'createDate', xtype: 'datecolumn', format: 'Y-m-d H:i:s.u T', flex: 3, menuDisabled: true },
				{text: 'Weight', flex: 2, dataIndex: 'weight', align: 'right', menuDisabled: true }
			],
			plugins: [
				Ext.create('Ext.grid.plugin.RowEditing')
			],
			dockedItems: [{
				xtype: 'pagingtoolbar',
				store: Ext.data.StoreManager.lookup('storeThings'),
				dock: 'bottom',
				displayInfo: true,
				items:[{
					xtype: 'tbseparator'
				},{
					id: 'buttonAdd',
					xtype: 'button',
					text: 'Add',
					icon: 'images/add.png',
					handler: function(){
						Ext.data.StoreManager.lookup('storeThings').add({});
					}
				},{
					id: 'buttonEdit',
					xtype: 'button',
					text: 'Edit',
					disabled: true,
					icon: 'images/edit.png',
					handler: function(){
						var record = Ext.getCmp('gridThings').getSelectionModel().getSelection();
						var editor = Ext.getCmp('gridThings').plugins[0];
						if (record.length > 0)
							editor.startEdit(record[0], 0);
					}
				},{
					id: 'buttonDelete',
					xtype: 'button',
					text: 'Delete',
					disabled: true,
					icon: 'images/delete.png',
					handler: function(){
						var store = Ext.data.StoreManager.lookup('storeThings');
						var record = Ext.getCmp('gridThings').getSelectionModel().getSelection();
						if (record.length > 0) {
							store.remove(record);
						}
					}
				}]
			}]
		}]
	});

	Ext.getCmp('gridThings').on('selectionchange', function(sm, record) {
		if (record.length > 0) {
			Ext.getCmp('buttonEdit').enable();
			Ext.getCmp('buttonDelete').enable();
		} else {
			Ext.getCmp('buttonEdit').disable();
			Ext.getCmp('buttonDelete').disable();
		}
	});

});
