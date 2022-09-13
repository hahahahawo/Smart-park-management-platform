<!-- 告警规则 -->
<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="body-box">
          <!-- 上方盒子 -->
          <div class="header-box">
            <div class="flexD-cow">
              <div class="small-box"></div>
              <div class="header-left-text">告警规则管理</div>
            </div>
            <div class="flexD-cow">
              <button class="btn-style btn-add" @click="toAdd">新增</button>
              <button class="btn-style btn-del">批量删除</button>
            </div>
          </div>
          <!-- 下方盒子 -->
          <div class="down-box">
            <!-- 输入盒子 -->
            <div class="input-box">
              <div class="flexD-cow">
                <div class="input-text">告警名称：</div>
                <el-input v-model="input" placeholder="请输入项目名称" />
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
                <el-table-column property="Xname" label="告警规则名称" />
                <el-table-column property="Xnum" label="通知用户" />
                <el-table-column property="Xlei" label="推送方式" />
                <el-table-column
                  property="Xaddre"
                  label="告警规则"
                  width="300"
                />
                <el-table-column property="Xperson" label="告警类型" />
                <el-table-column property="Xtai" label="告警等级" />
                <el-table-column label="创建时间">
                  <template #default="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column label="操作">
                  <el-button @click="handleEdit()">详情</el-button>
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
// const $router = useRouter();
// function toAdd() {
//   $router.replace({ path: "/addProject" });
// }
// function handleEdit() {
//   $router.replace({ path: "/addProject" });
// }
const options = [
  {
    value: "Option1",
    label: "请选择",
  },
  {
    value: "Option2",
    label: "手机",
  },
  {
    value: "Option3",
    label: "邮箱",
  },
  {
    value: "Option4",
    label: "APP",
  },
];
const tableData = [
  {
    Xname: "火灾预警提醒",
    Xnum: "园区管理员",
    Xlei: "手机",
    Xaddre: "火感报警器持续报警5分钟以上",
    Xperson: "灾害告警",
    Xtai: "特级",
    date: "2022-01-23",
  },
  {
    Xname: "视频断联提醒",
    Xnum: "监控室管理员",
    Xlei: "手机",
    Xaddre: "视频线路断联5分钟以上",
    Xperson: "线路故障",
    Xtai: "二级",
    date: "2022-01-23",
  },
  {
    Xname: "电压过高提醒",
    Xnum: "园区管理员",
    Xlei: "手机",
    Xaddre: "变压器电压高于额定电压",
    Xperson: "线路故障",
    Xtai: "二级",
    date: "2022-01-23",
  },
  {
    Xname: "智能水电表预警",
    Xnum: "物业团队管理员",
    Xlei: "APP",
    Xaddre: "智能水电表无法进行物联数据上网",
    Xperson: "设备故障",
    Xtai: "一级",
    date: "2022-01-23",
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
