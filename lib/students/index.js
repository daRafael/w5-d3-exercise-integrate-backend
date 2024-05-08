import axios from "axios";
import { API_URL } from "../index";

export const getAllStudents = async () => {
  try {
    const res = await axios.get(`${API_URL}/students`);
    return res.data;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
    };
  }
};

export const createStudent = async (student) => {
  try {
    const res = await axios.post(`${API_URL}/students`, student);
    return res.data;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
    };
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/students/${id}`);
    return res.data;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
    };
  }
};

export const updateStudent = async (student) => {
  try {
    const res = await axios.put(`${API_URL}/students/${student._id}`, student);
    return res.data;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
    };
  }
 };

export const getStudentById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/students/${id}`);
    return res.data;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
    };
  }
};