<template>
	<a-table rowKey="id" :columns="columns" :dataSource="tableData" @change="handleChange">
		<span slot="customTitle">
			<a-icon type="smile-o" spin /> Id
		</span>
		<template slot="name" slot-scope="text, record, index">
			<a-icon v-if="record.majorType" type="star" theme="filled" :style="{color: 'red'}" />
			<a-tooltip v-if="record.shortName != ''" placement="topLeft">
				<template slot="title">
					<span>项目简称: {{record.shortName}}</span>
				</template>
				<span>{{text}}</span>
			</a-tooltip>
			<span v-else>{{text}}</span>
		</template>
		<template slot="completeRate" slot-scope="text, record, index">
			<div style="width: 140px;">
				<a-progress :percent="parseFloat(text.toFixed(2))" size="small" />
			</div>
		</template>
		<span slot="action" slot-scope="text, record, index">
			<a>详情</a>
			<a-divider type="vertical" />
			<a>编辑</a>
			<a-divider type="vertical" />
			<a>删除</a>
		</span>
	</a-table>
</template>

<script>
	export default {
		props: [
			"tableData",
			"columnsData"
		],
		data() {
			return {
				filtersMeta: {},
				editUrl: "",
				deleteUrl: "",
			};
		},
		computed: {
			columns() {
				let columns = [];

				for (let index in this.columnsData) {
					columns[index] = this.columnsData[index];
					let keyName = columns[index].dataIndex;
					
					switch (keyName) {
						case "action":
							columns[index].scopedSlots = {
								customRender: 'action'
							};
							break;
						case "name":
							columns[index].sorter = function(a, b){
								let sortIndex = 0;
								if(a[keyName] && b[keyName]){
									sortIndex = String(a[keyName]).localeCompare(String(b[keyName]));
								}
								return sortIndex;
							};
							columns[index].scopedSlots = {
								customRender: 'name'
							};
							break;
						case "completeRate":
							columns[index].sorter = (a, b) => a[keyName] - b[keyName];
							columns[index].scopedSlots = {
								customRender: 'completeRate'
							};
							break;
						case "startDate":
							columns[index].sorter = (a, b) => String(a[keyName]).localeCompare(String(b[keyName]));
							break;
						case "constructionInvestment":
							columns[index].sorter = (a, b) => String(a[keyName]).localeCompare(String(b[keyName]));
							break;
						default:
							columns[index].filters = this.filtersMeta[columns[index].dataIndex] || [];
							columns[index].onFilter = (value, record) => record[columns[index].dataIndex].includes(value);
							columns[index].sorter = (a, b) => String(a[keyName]).localeCompare(String(b[keyName]));
					}
				}

				return columns;
			}
		},
		created: function() {
			this.processFilterData(this.tableData);

			for (let index in this.columnsData) {
				if (this.columnsData[index].editUrl && this.columnsData[index].editUrl != "") {
					this.editUrl = this.columnsData[index].editUrl;
				}
				if (this.columnsData[index].deleteUrl && this.columnsData[index].deleteUrl != "") {
					this.deleteUrl = this.columnsData[index].deleteUrl;
				}
			}
		},
		methods: {
			handleChange(pagination, filters, sorter) {
				// console.log('Various parameters', pagination, filters, sorter);
			},
			processFilterData(data) {
				let tableDataValueArr = {};
				for (let key in data[0]) {
					if (data[0].hasOwnProperty(key)) {
						tableDataValueArr[key] = [];
					}
				}
				
				data.forEach((value, index) => {
					for (let k in value) {
						if (tableDataValueArr[k] && !tableDataValueArr[k].includes(value[k])) {
							tableDataValueArr[k].push(value[k]);
						}
					}
				});

				for (let key in tableDataValueArr) {
					this.filtersMeta[key] = [];
					for (let i in tableDataValueArr[key]) {
						this.filtersMeta[key].push({
							text: tableDataValueArr[key][i],
							value: tableDataValueArr[key][i]
						});
					}
				}
			},
		},
	}
</script>

<style>
</style>
