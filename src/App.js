import React, { useState } from 'react';
import { mockItems } from './data/mockData';
import List from './components/List';
import SearchBar from './components/SearchBar';
import styles from './styles/App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [items, setItems] = useState(mockItems);
  const [selectedIds, setSelectedIds] = useState([]);
  const[selectedItems,setSelectedItems]=useState([]);
  const [selectAll,setSelectAll]=useState(false);
  const[isDarkMode,setIsDarkMode]=useState(false);

  // Search handler
  const handleSearch = (term) => setSearchTerm(term);

  // Sort handler
  const handleSortChange = (e) => setSortBy(e.target.value);

  // Checkbox select/deselect
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemID) => itemID !== id) : [...prev, id]
    );
  };
  const handleSelectAll=(e)=>{
    const ischecked=e.target.checked;
    setSelectAll(ischecked);
    if(ischecked){
      const allVisibleIds=filteredItems.map((item)=>item.id);
    
      setSelectedIds(allVisibleIds);
    }else {
      setSelectedIds([]);
    }
    
  
  };

  // Delete selected
  const handleDeleteSelected = () => {
    const updated = items.filter((item) => !selectedIds.includes(item.id));
    setItems(updated);
    setSelectedIds([]);
  };

  // Archive selected (dummy)
  const handleArchiveSelected = () => {
    alert(`Archived ${selectedIds.length} items.`);
    setSelectedIds([]);
  };

  // Filter + Sort
  const filteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      else if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark:styles.light}`}>
      <h1>Virtualized List App</h1>

      {/* Search */}
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Sort */}
      <select
        onChange={handleSortChange}
        value={sortBy}
        style={{ marginBottom: '15px', padding: '8px' }}
      >
        <option value="title">Sort by Title (A–Z)</option>
        <option value="date">Sort by Date (Newest)</option>
      </select>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <button onClick={handleDeleteSelected} style={{ marginRight: '10px' }}>
            🗑️ Delete Selected
          </button>
          <p>Selected count:{selectedIds.length}</p>
          <button onClick={handleArchiveSelected}>📦 Archive Selected</button>
        </div>
      )}
      <div>
          <div style={{display:'flex',alignItems:'center',marginBottom:'10px'}}>
          <input type='checkbox' 
          checked={selectAll}
          onChange={handleSelectAll}/><label htmlFor='selectAll' style={{marginLeft:'8px'}}>Select All

          </label>
          </div>
          <button onClick={()=> setIsDarkMode(prev=>!prev)}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>  
      </div>
      

      {/* List */}
      {filteredItems.length > 0 ? (
        <List
          items={filteredItems}
          selectedIds={selectedIds}
          onSelect={handleSelect}
        />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
    alt="empty"
    width="100"
    height="100"
    style={{ opacity: 0.6 }}
  />
  <p style={{ fontSize: '18px', marginTop: '10px' }}>No matching items found.</p>
</div>
        </p>
      )}
    </div>
  );
}

export default App;