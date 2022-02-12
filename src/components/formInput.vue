<template>
  <div>
    <b-row class="mb-5 mt-2 justify-content-center">
      <b-col cols="12" sm="12" md="8" lg="6" xl="6">
        <b-row>
          <b-col cols="12" sm="12" md="6">
            <b-form-group
              class="mb-3"
              id="input-a"
              label="Your Name:"
              label-for="input-a"
            >
              <b-form-input
                id="input-a"
                v-model="form.name"
                required
                trim
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group
              class="mb-3"
              id="input-b"
              label="Your Surname:"
              label-for="input-b"
            >
              <b-form-input
                id="input-b"
                v-model="form.lastname"
                required
                trim
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4">
            <b-form-group
              class="mb-3"
              id="input-c"
              label="Birthday:"
              label-for="input-c"
            >
              <b-form-input
                id="input-c"
                v-model="form.Bdate"
                required
                type="date"
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4">
            <b-form-group
              class="mb-3"
              id="input-g"
              label="Tel:"
              label-for="input-g"
            >
              <b-form-input
                id="input-g"
                v-model="form.tel"
                required
                type="text"
                trim
                :maxlength="max"
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4">
            <b-form-group
              class="mb-3"
              id="input-h"
              label="Mail:"
              label-for="input-h"
            >
              <b-form-input
                id="input-h"
                v-model="form.email"
                required
                type="email"
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="5">
            <b-form-group
              class="mb-3"
              id="input-d"
              label="Salary:"
              label-for="input-d"
            >
              <b-form-input
                id="input-d"
                v-model="form.salary"
                required
                type="number"
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4">
            <b-form-group
              class="mb-3"
              id="input-e"
              label="Expected salary:"
              label-for="input-e"
            >
              <b-form-input
                id="input-e"
                v-model="form.expectedSalary"
                required
                type="number"
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="3">
            <b-form-group
              class="mb-3"
              id="input-f"
              label="Saleperson:"
              label-for="input-f"
            >
              <b-form-input
                id="input-f"
                v-model="form.salePerson"
                required
              ></b-form-input>
              <span class="f-12 text-danger">*Require</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group
          class="mb-3"
          id="input-i"
          label="Education level:"
          label-for="input-i"
        >
          <b-form-select
            v-model="form.educationLavel"
            :options="educationOption"
          ></b-form-select>
          <span class="f-12 text-danger">*Require</span>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-j"
          label="File:"
          label-for="input-j"
        >
          <b-form-file plain v-model="form.file"></b-form-file>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-k"
          label="Skill:"
          label-for="input-k"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.skill"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-l"
          label="Current position:"
          label-for="input-l"
        >
          <b-form-input
            id="input-l"
            v-model="form.currentPosition"
            required
          ></b-form-input>
          <span class="f-12 text-danger">*Require</span>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-m"
          label="Desired position:"
          label-for="input-m"
        >
          <b-row no-gutters>
            <b-col class="text-center" cols="12" sm="1" md="1"
              ><p class="mt-3">1.</p></b-col
            >
            <b-col cols="12" sm="11" md="11">
              <b-form-input
                class="mt-2"
                id="input-l"
                v-model="form.desiredPosition_1"
                required
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col class="text-center" cols="12" sm="1" md="1"
              ><p class="mt-3">2.</p></b-col
            >
            <b-col cols="12" sm="11" md="11">
              <b-form-input
                class="mt-2"
                id="input-l"
                v-model="form.desiredPosition_2"
                required
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col class="text-center" cols="12" sm="1" md="1"
              ><p class="mt-3">3.</p></b-col
            >
            <b-col cols="12" sm="11" md="11">
              <b-form-input
                class="mt-2"
                id="input-l"
                v-model="form.desiredPosition_3"
                required
              ></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-n"
          label="Remark:"
          label-for="input-n"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.remark"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-o"
          label="Date of availability:"
          label-for="input-o"
        >
          <b-form-select
            v-model="form.dateofAvailability"
            :options="dateofAvailabilityOption"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-p"
          label="Certificate:"
          label-for="input-p"
        >
          <b-form-input
            id="input-p"
            v-model="form.certificate"
            required
          ></b-form-input>
        </b-form-group>
        <!-- action -->
        <!-- {{ isForm }} -->
        <b-button :disabled="!isForm" @click="echoValue" variant="primary"
          >Submit</b-button
        >
        <b-button class="mx-2" @click="clearValue" variant="danger"
          >Reset</b-button
        >
        <!-- result -->
        <b-card v-if="show" class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const fillForm = {
  name: "Apisara",
  lastname: "pangpeng",
  Bdate: "",
  salary: 0,
  expectedSalary: 0,
  salePerson: "",
  tel: "",
  email: "",
  educationLavel: "",
  file: null,
  skill: "",
  currentPosition: "",
  desiredPosition_1: "",
  desiredPosition_2: "",
  desiredPosition_3: "",
  remark: "",
  dateofAvailability: "",
  certificate: "",
};
const validateEmail = (email) => {
  /* eslint-disable */
  //eslint-disable-next-line
  var checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email !== "" ? checkMail.test(String(email).toLowerCase()) : false;
};
const validateTel = (tel) => {
  //eslint-disable-next-line
  var checkTel = /^[0-9]*$/;
  return tel !== "" ? checkTel.test(String(tel)) : false;
};
const validateVal = (val) => {
  //eslint-disable-next-line
  var check = val !== null && val !== "";
  return check;
};
export default {
  data() {
    return {
      max: 10,
      form: Object.assign({}, fillForm),
      educationOption: [
        { text: "under bachelor's degree", value: "under bachelor's degree" },
        { text: "Master's degree", value: "Master's degree" },
        { text: "Ph.D.", value: "Ph.D." },
        { text: "Other", value: "Other" },
      ],
      dateofAvailabilityOption: [
        { text: "Now", value: "Now" },
        { text: "30 days", value: "30 days" },
        { text: "45 days", value: "45 days" },
        { text: "Other", value: "Other" },
      ],
      show: false,
    };
  },
  computed: {
    isForm() {
      if (
        validateVal(this.form.name) &&
        validateVal(this.form.lastname) &&
        validateVal(this.form.Bdate) &&
        validateVal(this.form.salary) &&
        validateVal(this.form.expectedSalary) &&
        validateVal(this.form.salePerson) &&
        validateVal(this.form.educationLavel) &&
        validateVal(this.form.currentPosition) &&
        validateEmail(this.form.email) &&
        validateTel(this.form.tel) &&
        this.form.tel.length == 10
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    echoValue() {},
    clearValue() {
      this.form = Object.assign({}, fillForm);
    },
  },
};
</script>

<style scoped>
.f-12 {
  font-size: 12px;
}
.custom-control-label:before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff #fff
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.75rem center/8px 10px no-repeat right 0.75rem center/8px
    10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-control-input.is-invalid:focus:not(:checked)
  ~ .custom-control-label:before,
.custom-file-input.is-invalid ~ .custom-file-label,
.was-validated
  .custom-control-input:invalid:focus:not(:checked)
  ~ .custom-control-label:before,
.was-validated .custom-file-input:invalid ~ .custom-file-label {
  border-color: #dc3545;
}
.custom-file-label {
  white-space: nowrap;
  overflow-x: hidden;
}
.custom-control-label:before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.custom-file-label,
.custom-file-label:after {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
}
.custom-file-label {
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>