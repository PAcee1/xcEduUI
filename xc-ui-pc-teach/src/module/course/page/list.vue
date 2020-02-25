<template>
  <section>
    <el-form :model="params">
      <el-input v-model="params.name" size="mini" placeholder="课程名称" style="width:200px"></el-input>
      <el-button size="small" type="primary" plain v-on:click="getCourse">查询</el-button>
      <router-link class="mui-tab-item" :to="{path:'/course/add',query:{
          page: this.params.page,
          name: this.params.name}}">
        <el-button size="small" type="primary" plain >新增</el-button>
      </router-link>
      <el-button size="small" type="danger"  @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
    </el-form>

    <!--列表-->
    <el-table :data="courses" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
              style="width: 100%;">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="name" label="课程名称" width="120">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="120">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="120" :formatter="formatStatus">
      </el-table-column>
      <el-table-column prop="createtime" label="创建时间" width="180" :formatter="formatCreatetime">
      </el-table-column>
      <!--<el-table-column label="操作" width="150">-->
      <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
      <!--<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>-->
      <!--</el-table-column>-->
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="handleEdit(scope.row.id)">编辑
            </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDel(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-col :span="24" class="toolbar">

      <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20"
                     :total="total" :current-page="this.params.page"
                     style="float:right;">
      </el-pagination>
    </el-col>

  </section>
</template>
<script>
//  import addVue from './add.vue';
//  import editVue from './edit.vue';
  import * as courseApi from '../api/course';
  import utilApi from '../../../common/utils';
  export default {
//    components: {
//      addVue,
//      editVue
//    },
    data() {
      return {
        params: {
          page:this.$route.query.page||1,
          name:this.$route.query.name
        },
        courses: [],
        total: 0,
//        page: 1,
        listLoading: false,
        sels: [],//列表选中列
      }
    },
    methods: {
      //状态显示转换
      formatStatus: function (row, column) {
        return row.status == 0 ? '未发布' : row.status == 1 ? '已发布' : '未知';
      },
      //
      formatCreatetime: function (row, column) {
        var createTime = new Date(row.createTime);
          console.log(createTime);
        if (createTime) {
//              console.log();
          return utilApi.formatDate(createTime, 'yyyy-MM-dd hh:mm:ss');
//            return createtime.formatDate('yyyy-MM-dd hh:mm:ss');
        }

      },
      handleCurrentChange(val) {
        this.params.page = val;
        this.getCourse();
      },
      //获取课程列表
      getCourse() {
        let para = {
          page: this.params.page,
          name: this.params.name
        };
        this.listLoading = true;
        //NProgress.start();
        courseApi.getCourseListPage(para).then((res) => {
          console.log(res);
          this.total = res.total;
          this.courses = res.courses;
          this.listLoading = false;
          //NProgress.done();
        });
      },
      handleEdit: function (id) {
//        console.log(id)
        this.$router.push({ path: '/course/edit', query:{
          id: id,
          page: this.params.page,
          name: this.params.name}})
      },
      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = {id: row.id};
          courseApi.removeCourse(para).then((res) => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getCourse();
          });
        }).catch(() => {

        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      //批量删除
      batchRemove: function () {

      }
    },
    created(){
      this.params.page = Number.parseInt(this.$route.query.page||1);
    },
    mounted() {
      this.getCourse();
    }
  }
</script>
<style scoped>

</style>
