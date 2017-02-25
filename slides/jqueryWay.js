function loadData (data) {
  for (let i = 0; i < data.length; i++) {
    const thisRow = data[i]
    const tableClass = data.warning ? 'warning' : 'normal'
    const html = `<tr class="${tableClass}"><td>${thisRow.title}</td><td>${thisRow.description}</td></tr>`
    $('#table #body').append(html)
  }
}

function editTitleOfRow (title, id) {
  // ?????
}
