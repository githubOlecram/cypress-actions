const { faker } = require('@faker-js/faker')

Feature('tasks');

Scenario.only('deve poder cadastrar uma nova tarefa',  ({ I }) => {

    const taskName = faker.company.name()

    I.amOnPage('/')

    I.fillField('input[class*=NewTask]', taskName)
    I.click('Create')

    I.see( taskName, '.task-item')
});
