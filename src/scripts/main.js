'use strict';

function parseSalary(salary) {
  return parseInt(salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));
    return salaryB - salaryA;
  });

  // Re-append the sorted items back to the list
  items.forEach(item => list.appendChild(item));
}

const employeeList = document.querySelector('ul');
sortList(employeeList);
