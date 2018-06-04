<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="The Number of NEs">
        <el-input v-model="form.neCount" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="The First NE ID">
        <el-input v-model="form.firstNeId" style="width:250px"></el-input>       
      </el-form-item>
      <el-form-item label="NE Type">
        <el-select v-model="form.neType" placeholder="please select NE Type" style="width:250px">
          <el-option label="BG64" value="BG64"></el-option>
          <el-option label="NPT1200" value="NPT1200"></el-option>
        </el-select>
        <!-- <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col> -->
      </el-form-item>
      <el-form-item label="NE Version">
        <el-select v-model="form.neVersion" placeholder="please select NE Version" style="width:250px" filterable allow-create default-first-option>
          <el-option label="V15.0" value="V15.0"></el-option>
          <el-option label="V15.1" value="V15.1"></el-option>
        </el-select>
        <!-- <el-switch v-model="form.neVersion"></el-switch> -->
      </el-form-item>
      <el-form-item label="The First NE IP">
        <el-input v-model="form.firstNeIp" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="IP Mask">
        <el-input v-model="form.mask" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="Network Interface">
         <el-select v-model="form.networkInterface" placeholder="please select Network Interface" style="width:300px">
          <el-option label="Broadcom1" value="Broadcom1"></el-option>
          <el-option label="Broadcom2" value="Broadcom2"></el-option>
        </el-select>
        <!-- <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group> -->
      </el-form-item>
      <!-- <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        neCount: '',
        firstNeId: '',
        neType: '',
        neVersion: '',
        firstNeIp: '',
        mask: '',
        networkInterface: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

