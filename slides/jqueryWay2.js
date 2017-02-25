let appData = [ ]

function loadData (data) {
  appData = data
  for (let thisRow of appData) {
    const tableClass = data.warning ? 'warning' : 'normal'
    const html = `<tr class="${tableClass}" data-id="${thisRow.id}">
        <td class="titleCell">${thisRow.title}</td>
        <td>${thisRow.description}</td>
    </tr>`
    $('#table #body').append(html)
  }
}

function editTitleOfRow (newTitle, id) {
  for (let row of appData) {
    if (row.id === id) {
      appData.title = newTitle
    }
  }
  $(`#table tr[data-id]="${id}" .titleCell`).html(newTitle)
}

function saveData () {
  $.post('/api/save', { data: appData }, function () {
    alert('Save sucess')
  })
}
