<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column label='ID' width="150" align="center">
        <template slot-scope="scope">
          {{scope.$index + 1}}
        </template>
      </el-table-column>
      <!-- <el-table-column label="Title"> -->
      <el-table-column label="NEID" width="150" align="center">
        <template slot-scope="scope">
          <!-- {{scope.row.title}} -->
          {{scope.row.neid}}
        </template>
      </el-table-column>
      <!-- <el-table-column label="Author" width="110" align="center"> -->
      <el-table-column label="NEName" width="150" align="center">
        <template slot-scope="scope">
          <!-- <span>{{scope.row.author}}</span> -->
          <span>{{scope.row.nename}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="Pageviews" width="110" align="center"> -->
      <el-table-column label="NEIP" width="150" align="center">
        <template slot-scope="scope">
          <!-- {{scope.row.pageviews}} -->
          {{scope.row.neip}}
        </template>
      </el-table-column>
      <el-table-column label="NE Status" width="150" align="center">
        <template slot-scope="scope">
          <!-- {{scope.row.pageviews}} -->
          <el-tag :type="nestatus|statusFilter">{{nestatus}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Operation" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="small" class="editButton" @click="editNe">Edit</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" class="deleteButton" @click="deleteNe">Delete</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      nestatus: null
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        /* published: 'success',
        draft: 'gray',
        deleted: 'danger' */
        Activated: 'success',
        deActivated: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      console.log(this.listQuery)
      this.listLoading = true
      getList(this.listQuery).then(response => {
      //  this.list = response.data.items
        console.log(response)
        this.list = response.data.neLists
        this.listLoading = false
        this.nestatus = 'deActivated'
      })
    },
    editNe() {
      this.$confirm('Will delete NE, Contiune?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonClass: 'confirmButton',
        cancelButtonClass: 'cancelButton',
        type: 'warning'
      }).then(() => {
        this.$notify({
          duration: 0,
          type: 'success',
          message: 'NE Deleted!'
        })
      }).catch(() => {
        this.$notify({
          duration: 0,
          type: 'info',
          message: 'Deletion Cancelled'
        })
      })
    },
    deleteNe() {
      this.$confirm('Will delete NE, Contiune?', 'Warning', {
        confirmButtonClass: 'confirmButton',
        cancelButtonClass: 'cancelButton',
        confirmButtonText: 'No',
        cancelButtonText: 'Yes',
        type: 'warning'
      }).then(() => {       
        this.$notify({
          duration: 0,
          type: 'info',
          message: 'Deletion Cancelled'
        })
      }).catch(() => {
        this.$notify({
          duration: 0,
          type: 'success',
          message: 'NE Deleted!'
        })
      })
    }
  }
}
</script>

<style>
.editButton{
  width: 80px;
}
.deleteButton{
  width: 80px;
}
.confirmButton{
  width: 50px
}
.cancelButton{
  width: 50px
}
</style>