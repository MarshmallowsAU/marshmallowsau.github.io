function createGroup(isRoot = false) {
    const group = document.createElement('div');
    group.className = 'group';

    group.innerHTML = `
      <div class="group-header">
        <h3>Logic</h3>
        <select onchange="updateOutput()">
          <option value="&">AND (&)</option>
          <option value="|">OR (|)</option>
          <option value="!&">NOT AND (!(&))</option>
          <option value="!|">NOT OR (!(|))</option>
        </select>
        <button class="secondary-btn" onclick="addFilter(this)">+ Filter</button>
        <button class="secondary-btn" onclick="addGroup(this)">+ Group</button>
        ${isRoot ? '' : '<button class="remove-btn" onclick="this.closest(\'.group\').remove(); updateOutput();">Remove</button>'}
      </div>
      <div class="children"></div>
    `;

    return group;
  }

  function addGroup(btn) {
    const parent = btn ? btn.closest('.group').querySelector('.children') : document.getElementById('root');
    const group = createGroup(!btn);
    parent.appendChild(group);
    updateOutput();
  }

  function addFilter(btn) {
    const children = btn.closest('.group').querySelector('.children');
    const row = document.createElement('div');
    row.className = 'row';

    row.innerHTML = `
      <input placeholder="Attribute" oninput="updateOutput()" />
      <select onchange="updateOutput()">
        <option value="=">Equals [=]</option>
        <option value="~=">Approximate [~=] </option>
        <option value=">=">Greater orEqual [>=]</option>
        <option value="<=">Lesser or Equal [<=]</option>
        <option value="=*X*">Contains [=*X*]</option>
        <option value="=*X">Starts With [=*X]</option>
        <option value="=X*">Ends With [=X*]</option>
      </select>
      <input placeholder="Value" oninput="updateOutput()" />
      <button class="remove-btn" onclick="this.parentElement.remove(); updateOutput();">✕</button>
    `;

    children.appendChild(row);
    updateOutput();
  }

  function buildNode(node) {
    if (node.classList.contains('row')) {
      const attr = node.children[0].value.trim();
      const op = node.children[1].value;
      const val = node.children[2].value.trim();
      if (!attr || !val) return null;
      switch (op) {
        case '=*X*':
          return `(${attr}=*${val}*)`
        case '=X*':
          return `(${attr}=${val}*)`
        case '=*X':
          return `(${attr}=*${val})`
        default:
          return `(${attr}${op}${val})`
      }
    }

    if (node.classList.contains('group')) {
      const logic = node.querySelector('select').value;
      const parts = [];
      node.querySelectorAll(':scope > .children > .group, :scope > .children > .row')
        .forEach(child => {
          const built = buildNode(child);
          if (built) parts.push(built);
        });

      if (parts.length === 0) return null;
      if (parts.length === 1 && !logic.startsWith('!')) return parts[0];

      if (logic === '!&') return `(!(&${parts.join('')}))`;
      if (logic === '!|') return `(!(|${parts.join('')}))`;
      return `(${logic}${parts.join('')})`;
    }

    return null;
  }

  function updateOutput() {
    const root = document.getElementById('root').firstElementChild;
    const result = root ? buildNode(root) : '';
    document.getElementById('output').value = result || '';
  }