const tasks = require('../models/taskModel')

var taskData

exports.find = async (req, res) => {
  try {
    const myTasks = await tasks.find()
    taskData = myTasks
    if (myTasks == null) console.log('err')
    res.render('index', {
      myTasks: myTasks,
      tasksFound: 'empty',
    })
  } catch (error) {
    res.send('<h1>Encountered DB Error</h1>')
    console.log(error)
  }
}

exports.add = (req, res) => {
  const taskName = req.body.taskName
  const taskDescription = req.body.taskDescription
  const taskAssign = req.body.taskAssign
  const dueDate = req.body.dueDate

  tasks({
    taskName: taskName,
    taskDescription: taskDescription,
    taskAssign: taskAssign,
    dueDate: dueDate,
  }).save(function (err) {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
}

exports.delete = (req, res) => {
  const taskID = req.body.id

  tasks.findOneAndRemove({ _id: taskID }, (err, doc) => {
    if (err) {
      console.log(err)
    }
    console.log(taskID + ' is deleted')
    res.redirect('/')
  })
}

exports.update = (req, res) => {
  const taskID = req.body.id
  tasks.findOneAndUpdate({ _id: taskID }, { completed: true }, (err, doc) => {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
}

exports.findByName = (req, res) => {
  var name = req.body.findByName
  tasks.find(
    { taskAssign: new RegExp('\\b' + name + '\\b', 'i') },
    (err, docs) => {
      if (err) {
        console.log(err)
      }
      res.render('index', {
        myTasks: taskData,
        tasksFound: docs,
      })
    }
  )
}
