const base = '/students';

async function fetchStudents() {
  const res = await fetch(base);
  const data = await res.json();
  const list = document.getElementById('studentsList');
  list.innerHTML = '';
  data.forEach(s => {
    const li = document.createElement('li');
    li.textContent = ID: ${s.id} | ${s.name} | CGPA: ${s.cgpa};
    list.appendChild(li);
  });
}

document.getElementById('addForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = Number(document.getElementById('id').value);
  const name = document.getElementById('name').value.trim();
  const cgpa = document.getElementById('cgpa').value.trim();

  await fetch(base, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name, cgpa })
  });

  document.getElementById('addForm').reset();
  fetchStudents();
});

fetchStudents();