<!-- 组织管理 -->
<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="body-box">
          <!-- 上方盒子 -->
          <div class="header-box">
            <div class="flexD-cow">
              <div class="small-box"></div>
              <div class="header-left-text">组织信息管理</div>
            </div>
            <div class="flexD-cow">
              <button class="btn-style btn-add">新增</button>
              <button class="btn-style btn-del">批量删除</button>
            </div>
          </div>
          <!-- 下方盒子 -->
          <div class="down-box">
            <!-- 输入盒子 -->
            <div class="input-box">
              <div class="flexD-cow">
                <div class="input-text">组织名称：</div>
                <el-input v-model="input" placeholder="请输入组织名称" />
              </div>
              <div class="flexD-cow">
                <div>推送方式：</div>
                <el-select
                  v-model="value"
                  class="m-2"
                  placeholder="请选择"
                  size="large"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="flexD-cow">
                <button class="btn-style btn-chax">查询</button>
                <button class="btn-style btn-res">重置</button>
              </div>
            </div>
            <!-- 列表 -->
            <div class="table-div">
              <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                :border="true"
                @selection-change="handleSelectionChange"
              >
                <el-table-column
                  type="selection"
                  width="55"
                  class="warning-row"
                />
                <el-table-column property="Xname" label="组织名称" />
                <el-table-column property="Xnum" label="组织类型" />
                <el-table-column property="Xlei" label="组织编号" />
                <el-table-column property="Xaddre" label="创建时间" />
                <el-table-column property="Xperson" label="更新时间" />
                <el-table-column label="操作">
                  <el-button @click="handleEdit()">详情</el-button>
                  <el-button @click="handleEdit()">配置</el-button>
                  <el-button type="danger" @click="handleDelete()"
                    >删除</el-button
                  >
                </el-table-column>
              </el-table>
            </div>
            <!-- 分页 -->
            <div class="pagin-div">
              <div class="demo-pagination-block">
                <el-pagination
                  v-model:currentPage="currentPage1"
                  v-model:page-size="pageSize1"
                  :page-sizes="[10, 20, 30, 40]"
                  background
                  layout="total, prev, pager, next,  sizes, jumper"
                  :total="100"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import * as ElIcons from "@element-plus/icons-vue";
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "请选择",
  },
  {
    value: "Option2",
    label: "地区",
  },
  {
    value: "Option3",
    label: "部门",
  },
  {
    value: "Option4",
    label: "处室",
  },
];
const tableData = [
  {
    Xname: "乐清市",
    Xnum: "地区",
    Xlei: "0",
    Xaddre: "2022-01-23",
    Xperson: "2022-01-23",
  },
  {
    Xname: "市府办",
    Xnum: "部门",
    Xlei: "1",
    Xaddre: "2022-01-23",
    Xperson: "2022-02-08",
  },
  {
    Xname: "统计局",
    Xnum: "处室",
    Xlei: "2",
    Xaddre: "2022-01-23",
    Xperson: "2022-02-08",
  },
  {
    Xname: "发展改革处",
    Xnum: "处室",
    Xlei: "3",
    Xaddre: "2022-01-23",
    Xperson: "2022-01-23",
  },
  {
    Xname: "经信局",
    Xnum: "部门",
    Xlei: "4",
    Xaddre: "2022-01-23",
    Xperson: "2022-01-23",
  },
  {
    Xname: "办公室",
    Xnum: "处室",
    Xlei: "5",
    Xaddre: "2022-01-23",
    Xperson: "2022-01-23",
  },
  {
    Xname: "企业科",
    Xnum: "处室",
    Xlei: "6",
    Xaddre: "2022-01-23",
    Xperson: "2022-01-23",
  },
  {
    Xname: "经济运行科",
    Xnum: "处室",
    Xlei: "7",
    Xaddre: "2022-01-23",
    Xperson: "2022-02-08",
  },
  {
    Xname: "产业人才科",
    Xnum: "处室",
    Xlei: "8",
    Xaddre: "2022-01-23",
    Xperson: "2022-02-08",
  },
  {
    Xname: "投资机装科",
    Xnum: "处室",
    Xlei: "9",
    Xaddre: "2022-01-23",
    Xperson: "2022-02-08",
  },
];
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #415c85;
  color: white;
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
.body-box {
  width: 99%;
  margin: 20px auto;
}
.header-left-text {
  font-size: 27px;
  font-weight: bold;
  margin-left: 20px;
}
.small-box {
  background-color: #5f81ea;
  width: 20px;
  height: 50px;
}
.flexD-cow {
  display: flex;
  flex-direction: cow;
  align-items: center;
}
.header-box {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px 30px;
}
.btn-style {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 40px;
  color: white;
  border-radius: 5px;
  border: none;
}
.btn-add {
  background-color: #20a0ff;
}
.btn-del {
  background-color: #ffb802;
  margin-left: 20px;
}
.btn-chax {
  background-color: #029789;
}
.btn-res {
  margin-left: 20px;
  border: 1px solid #c9c9c9;
  background-color: white;
  color: black;
}
.down-box {
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  height: 900px;
}
.input-box {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px 40px;
  border-radius: 10px;
}
.input-text {
  width: 110px;
}
.table-div {
  margin-top: 20px;
}
.pagin-div {
  margin-top: 20px;
  width: 50%;
  margin: 0 auto;
  margin-top: 200px;
}
</style>
