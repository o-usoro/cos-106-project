// ---------- ACADEMIC PLANNER (Tasks) ----------
let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text === '') {
        alert('Please enter a task.');
        return;
    }
    tasks.push({ text: text, completed: false });
    input.value = '';
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('taskList');
    if (!list) return;
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const div = document.createElement('div');
        div.className = 'task-item';
        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) span.className = 'completed';
        
        const actions = document.createElement('div');
        actions.className = 'actions';
        
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.style.background = '#f1c40f';
        doneBtn.onclick = () => { tasks[index].completed = !tasks[index].completed; renderTasks(); };
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.style.background = '#e74c3c';
        delBtn.onclick = () => { tasks.splice(index, 1); renderTasks(); };
        
        actions.appendChild(doneBtn);
        actions.appendChild(delBtn);
        div.appendChild(span);
        div.appendChild(actions);
        list.appendChild(div);
    });
}

// ---------- CONTACT FORM VALIDATION ----------
function validateForm(event) {
    event.preventDefault(); // Stops page refresh

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    // 1. Check empty fields
    if (name === '' || email === '' || phone === '' || message === '') {
        feedback.style.color = 'red';
        feedback.textContent = '❌ Error: All fields are required.';
        return;
    }

    // 2. Validate Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedback.style.color = 'red';
        feedback.textContent = '❌ Error: Enter a valid email (e.g., name@domain.com).';
        return;
    }

    // 3. Validate Phone (digits only)
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        feedback.style.color = 'red';
        feedback.textContent = '❌ Error: Phone number must contain only digits.';
        return;
    }

    // If all pass
    feedback.style.color = 'green';
    feedback.textContent = '✅ Success! Message sent (simulated).';
    document.getElementById('contactForm').reset();
}