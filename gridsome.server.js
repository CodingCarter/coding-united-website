const fs = require('fs')
const yaml = require('js-yaml')
let fileContents = fs.readFileSync('./src/data/data.yaml', 'utf8')
const data = yaml.safeLoad(fileContents);

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    data.instructors.forEach(instructor => {
      let classes = []      

      data.classes.forEach(course => {
        if (course.instructor == instructor.name) classes.push(course)
      })

      createPage({
        path: data.instructorsRoute + instructor.slug + '/',
        component: './src/templates/Instructor.vue',
        context: {
          data,
          instructor,
          classes
        }
      })
    })

    data.classes.forEach(course => {
      createPage({
        path: data.classesRoute + course.slug + '/',
        component: './src/templates/Class.vue',
        context: {
          data,
          class: course
        }
      })

      course.contents.forEach(content => {
        createPage({
          path: data.classesRoute + course.slug + '/' + content.title.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('').split('?').join('') + '/',
          component: './src/templates/Content.vue',
          context: {
            data,
            class: course,
            currentContent: content
          }
        })
      })

      
    })
  })
}
