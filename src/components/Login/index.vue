<template>
  <button class="btn btn-ghost btn-circle" @click="showDialog">
    <div class="login">
      <div>
        <SvgIcon icon-class="user" size="2rem"></SvgIcon>
      </div>
    </div>
  </button>
  <el-dialog
    v-model="dialogVisible"
    :title="isLogin ? '登录' : '注册'"
    width="500"
    :before-close="handleClose"
  >
    <el-form v-show="isLogin" :model="form" :rules="loginRules" ref="loginRulesFormRef">
      <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
        <el-input type="password" show-password v-model="form.password" autocomplete="off" />
      </el-form-item>
    </el-form>

    <el-form v-show="!isLogin" :model="form" :rules="registerRules" ref="registerRulesFormRef">
      <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
        <el-input show-password v-model="form.password" autocomplete="off" />
      </el-form-item>
      <!-- <el-form-item label="确认密码" prop="confirmPwd" :label-width="formLabelWidth">
        <el-input type="password" show-password v-model="form.confirmPwd" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="identifyCode" :label-width="formLabelWidth">
        <el-input show-password v-model="form.identifyCode" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <img style="margin-left: 100px" :src="codeUrl" alt="" @click="getIdentifyCode" />
      </el-form-item> -->
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button v-show="!isLogin" @click="register(registerRulesFormRef)">注册</el-button>
        <el-button v-show="isLogin" @click="isLogin = false">去注册</el-button>
        <el-button v-show="!isLogin" @click="isLogin = true"> 去登录 </el-button>
        <el-button v-show="isLogin" @click="login(loginRulesFormRef)"> 登录 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { FormRules } from 'element-plus/lib/components/form/src/types.js'
import { ref, reactive } from 'vue'
import { userForm } from './type'
import { ElMessage, FormInstance } from 'element-plus'
import service from '../../axios/index'
import { useAuthStore } from '../../store/authStore'
const dialogVisible = ref(false)

const formLabelWidth = '120px'

const form = reactive<userForm>({
  username: '',
  password: '',
  confirmPwd: '',
  identifyCode: ''
})

const loginRulesFormRef = ref<FormInstance>()
const registerRulesFormRef = ref<FormInstance>()
const showDialog = () => {
  resetForm(loginRulesFormRef.value)
  resetForm(registerRulesFormRef.value)
  dialogVisible.value = true
  isLogin.value = true
}

const isLogin = ref(true)

const loginRules = reactive<FormRules<userForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      min: 3,
      max: 12,
      message: '长度在 3 到 12 个字符',
      trigger: 'blur'
    }
  ]
})
const registerRules = reactive<FormRules<userForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      min: 1,
      max: 20,
      message: '长度在 1 到 20 个字符',
      trigger: 'blur'
    }
  ],
  confirmPwd: [{ required: true, message: '请确认密码', trigger: 'blur' }],
  identifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

const handleClose = () => {
  dialogVisible.value = false
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      service
        .post('/api/auth/login', form)
        .then((response) => {
          if (response.status === 201) {
            const token = response.data?.token
            const userInfo = response.data?.userInfo
            useAuthStore().setToken(token)
            useAuthStore().setUserInfo(userInfo)
            dialogVisible.value = false
            ElMessage({
              message: '登录成功！！',
              type: 'success'
            })
          }
        })
        .catch((error) => {
          ElMessage.error(error.message || 'An error occurred.')
        })
    }
  })
}
const register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    service
      .post('/api/user/register', form)
      .then((response) => {
        if (response.status === 201) {
          dialogVisible.value = false
          ElMessage({
            message: '注册成功！！',
            type: 'success'
          })
        }
      })
      .catch((error) => {
        ElMessage.error(error.message || 'An error occurred.')
      })
  })
}
</script>

<style>
.el-select {
  width: 300px;
}

.el-input {
  width: 300px;
}
</style>
