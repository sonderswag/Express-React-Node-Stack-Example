import axios from 'axios';

class ItemService {
  sendItem(data) {
    axios.post('http://localhost:4200/add/post',
      data)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  getList(callback) {
    axios.get('http://localhost:4200/')
    .then(response => {
      console.log('response',response);
      callback(null,response.data)
    })
    .catch(function (error) {
      console.log(error);
      callback(error)
    })
  }

  deleteItem(id, callback) {
    axios.get('http://localhost:4200/delete/'+id)
    .then(response => {
      console.log(response)
      callback(null,response.data)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  updateItem(id,update, callback) {
    axios.post('http://localhost:4200/update/'+id,update)
    .then(response => {
      console.log(response)
      callback(null)
    })
    .catch((err) => {
      console.log(err)
    })

  }
}

export default new ItemService()
