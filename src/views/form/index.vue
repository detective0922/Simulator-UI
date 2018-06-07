<template>
  <div class="app-container">
    <el-form ref="form" :model="form" status-icon :rules="rules" label-width="160px">
      <el-form-item label="The Number of NEs" prop="neCount">
        <el-input v-model="form.neCount" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="The First NE ID" prop="firstNeId">
        <el-input v-model="form.firstNeId" style="width:250px"></el-input>       
      </el-form-item>
      <el-form-item label="NE Type" prop="neType">
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
      <el-form-item label="NE Version" prop="neVersion">
        <el-select v-model="form.neVersion" placeholder="please select NE Version" style="width:250px" filterable allow-create default-first-option>
          <el-option label="V15.0" value="V15.0"></el-option>
          <el-option label="V15.1" value="V15.1"></el-option>
        </el-select>
        <!-- <el-switch v-model="form.neVersion"></el-switch> -->
      </el-form-item>
      <el-form-item label="The First NE IP" prop="firstNeIp"> 
        <el-input v-model="form.firstNeIp" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="IP Mask" prop="mask">
        <el-input v-model="form.mask" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="Network Interface" prop="networkInterface">
         <el-select v-model="form.networkInterface" placeholder="please select Network Interface" style="width:300px">
          <!-- <el-option label="Broadcom1" value="Broadcom1"></el-option>
          <el-option label="Broadcom2" value="Broadcom2"></el-option> -->
          <el-option v-for="netIf in netIfList" :key="netIf.index" :label="netIf.description" :value="netIf.index">
    </el-option>
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
        <el-button type="primary" @click="onSubmit('form')">Create</el-button>
        <el-button @click="onReset('form')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validateIp, validateIpMask } from '@/utils/validate'
import { /* createNe, */ getNetworkInterfaces } from '@/api/form'

export default {
  data() {
    var validateCount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please input number'))
      } else if (isNaN(value - parseFloat(value))) {
        callback(new Error('invalid number'))
      } else {
        callback()
      }
    }
    var validateNeId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please input NE ID'))
      } else if (isNaN(value - parseFloat(value))) {
        callback(new Error('invalid NE ID'))
      } else {
        callback()
      }
    }
    var validateNeIp = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please input NE IP'))
      } else if (!validateIp(value)) {
        callback(new Error('invalid NE IP'))
      } else {
        callback()
      }
    }
    var validateNeMask = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please input NE Mask'))
      } else if (!validateIpMask(value)) {
        callback(new Error('invalid NE Mask'))
      } else {
        callback()
      }
    }
    return {
      netIfList: null,
      form: {
        neCount: '',
        firstNeId: '',
        neType: '',
        neVersion: '',
        firstNeIp: '',
        mask: '',
        networkInterface: ''
      },
      rules: {
        neCount: [
          { required: true, validator: validateCount, trigger: 'blur' }
        ],
        firstNeId: [
          { required: true, validator: validateNeId, trigger: 'blur' }
        ],
        neType: [
          { required: true, message: 'please select NE Type', trigger: 'change' }
        ],
        neVersion: [
          { required: true, message: 'please select NE Version', trigger: 'change' }
        ],
        firstNeIp: [
          { required: true, validator: validateNeIp, trigger: 'blur' }
        ],
        mask: [
          { required: true, validator: validateNeMask, trigger: 'blur' }
        ],
        networkInterface: [
          { required: true, message: 'please select Network Interface', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    console.log(this.networkInterface)
    this.initNetworkInterfaces()
  },
  methods: {
    initNetworkInterfaces() {
      getNetworkInterfaces(this.listQuery).then(response => {
        this.netIfList = response.data.netIfLists
        console.log(this.netIfList)
      })
    },
    onSubmit(formName) {
      console.log('swp')
      console.log(this.networkInterface)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // createNe(this.form)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onReset(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

