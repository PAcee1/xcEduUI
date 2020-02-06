<template>
<div>
  <!-- template里存放model -->
  <!-- 查询 -->
  <el-form>
    <el-select v-model="params.siteId" placeholder="请选择站点">
      <el-option 
      v-for="item in siteList"
      :key="item.siteId"
      :label="item.siteName"
      :value="item.siteId">
      </el-option>
    </el-select>
    页面别名：<el-input v-model="params.pageAliase" style="width: 100px"></el-input>
    <el-button type="primary" size="small" v-on:click="query">查询</el-button>

    <router-link class="mui-tabl-item" 
    :to="{path:'/cms/page/add',query:{
      page:this.params.page,
      siteId : this.params.siteId,
      pageAliase: this.params.pageAliase
    }}">
    <el-button type="primary" size="small" >新增页面</el-button>
    </router-link>
  </el-form>
  
  <!-- list table -->
  <el-table :data="list" stripe style="width: 100%">
    <el-table-column type="index" width="60">
    </el-table-column>
    <el-table-column prop="pageName" label="页面名称" width="120">
    </el-table-column>
    <el-table-column prop="pageAliase" label="别名" width="120">
    </el-table-column>
    <el-table-column prop="pageType" label="页面类型" width="150">
    </el-table-column>
    <el-table-column prop="pageWebPath" label="访问路径" width="250">
    </el-table-column>
    <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
    </el-table-column>
    <el-table-column prop="pageCreateTime" label="创建时间" >
    </el-table-column>
    <el-table-column label="编辑" width="80">
      <template slot-scope="scope">
        <el-button
          size="small" type="primary"
          @click="edit(scope.row.pageId)">编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页 -->
  <el-pagination
    background
    layout="prev, pager, next"
    style="float:right;"
    :total="total"
    :page-size="params.size"
    :current-page="params.page"
    @current-change="changePage">
  </el-pagination>
</div>
</template>
<script>
  import * as cmsApi from '../api/cms';
  export default {
    data() {
      return {
        "list": [],
        "siteList":[],
        "total": 22,
        params:{
          page:1,
          size:10,
          siteId:"",
          pageAliase:""
        }
      }
    },
    methods: {
      query: function(){
        cmsApi.page_list(this.params.page,this.params.size,this.params).then((res)=>{
          console.log(res)
          // 将结果赋值
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        })
      },
      changePage: function(page){
        this.params.page = page;
        this.query();
      },
      edit: function(pageId){
        this.$router.push({
          path:'/cms/page/edit/' + pageId,
          query:{
            page:this.params.page,
            siteId : this.params.siteId,
            pageAliase: this.params.pageAliase
          }
        })
      }
    },
    created() {
      // 如果是从其他页面跳转回此页面，需要设置参数
      this.params.page = Number.parseInt(this.$route.query.page || 1);
      this.params.siteId = this.$route.query.siteId || '';
      this.params.pageAliase = this.$route.query.pageAliase || '';
    },
    mounted() {
      // Dom元素加载完后执行
      this.query();
      // 初始化站点，直接写死
      this.siteList = [
        {
          siteId: '5a751fab6abb5044e0d19ea1',
          siteName: '门户主站'
        }
      ]
    },
  }
</script>
<style>
  /* 样式，可写可不写 */
</style>