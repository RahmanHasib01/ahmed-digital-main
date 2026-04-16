'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [newTabName, setNewTabName] = useState('');
  const [newTabLayout, setNewTabLayout] = useState('landscape');

  useEffect(() => {
    fetch('/api/videos')
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setActiveTab(Object.keys(d)[0]);
      });
  }, []);

  const save = async (updated) => {
    setSaving(true);
    setMessage('');
    const res = await fetch('/api/videos', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    setSaving(false);
    if (res.ok) {
      setMessage('Saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Failed to save.');
    }
  };

  const updateVideoUrl = (tab, index, field, value) => {
    const updated = { ...data };
    updated[tab] = { ...updated[tab], videos: [...updated[tab].videos] };
    updated[tab].videos[index] = { ...updated[tab].videos[index], [field]: value };
    setData(updated);
  };

  const addVideo = (tab) => {
    const updated = { ...data };
    updated[tab] = { ...updated[tab], videos: [...updated[tab].videos, { src: '' }] };
    setData(updated);
  };

  const removeVideo = (tab, index) => {
    const updated = { ...data };
    updated[tab] = {
      ...updated[tab],
      videos: updated[tab].videos.filter((_, i) => i !== index),
    };
    setData(updated);
  };

  const addTab = () => {
    const name = newTabName.trim().toLowerCase();
    if (!name || data[name]) return;
    const updated = { ...data, [name]: { layout: newTabLayout, videos: [] } };
    setData(updated);
    setActiveTab(name);
    setNewTabName('');
  };

  const removeTab = (tab) => {
    if (!confirm(`Delete the "${tab}" tab and all its videos?`)) return;
    const updated = { ...data };
    delete updated[tab];
    setData(updated);
    if (activeTab === tab) setActiveTab(Object.keys(updated)[0] || null);
  };

  const toggleLayout = (tab) => {
    const updated = { ...data };
    updated[tab] = {
      ...updated[tab],
      layout: updated[tab].layout === 'landscape' ? 'portrait' : 'landscape',
    };
    setData(updated);
  };

  if (!data) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner} />
        <p style={{ color: '#aaa', marginTop: 16 }}>Loading dashboard...</p>
      </div>
    );
  }

  const tabs = Object.keys(data);
  const current = data[activeTab];

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Video Dashboard</h1>
          <p style={styles.subtitle}>Manage your portfolio videos</p>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/" style={{ ...styles.saveBtn, background: '#333', color: '#fff', textDecoration: 'none', padding: '10px 16px' }}>
            ← Home
          </Link>
          {message && (
            <span
              style={{
                ...styles.message,
                color: message.includes('Failed') ? '#f87171' : '#4ade80',
              }}
            >
              {message}
            </span>
          )}
          <button onClick={() => save(data)} disabled={saving} style={styles.saveBtn}>
            {saving ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div style={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.tabActive : {}),
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Add new tab */}
      <div style={styles.addTabRow}>
        <input
          type="text"
          placeholder="New tab name..."
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTab()}
          style={styles.input}
        />
        <select
          value={newTabLayout}
          onChange={(e) => setNewTabLayout(e.target.value)}
          style={styles.select}
        >
          <option value="landscape">Landscape (2-col)</option>
          <option value="portrait">Portrait (4-col)</option>
        </select>
        <button onClick={addTab} style={styles.addBtn}>
          + Add Tab
        </button>
      </div>

      {/* Active tab content */}
      {activeTab && current && (
        <div style={styles.content}>
          <div style={styles.tabHeader}>
            <h2 style={styles.tabTitle}>{activeTab}</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => toggleLayout(activeTab)} style={styles.layoutBtn}>
                Layout: {current.layout}
              </button>
              <button onClick={() => removeTab(activeTab)} style={styles.deleteTabBtn}>
                Delete Tab
              </button>
            </div>
          </div>

          {/* Video list */}
          <div style={styles.videoList}>
            {current.videos.map((video, index) => (
              <div key={index} style={styles.videoCard}>
                <div style={styles.videoNumber}>{index + 1}</div>
                <div style={styles.videoFields}>
                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Video URL</label>
                    <input
                      type="text"
                      value={video.src}
                      onChange={(e) => updateVideoUrl(activeTab, index, 'src', e.target.value)}
                      placeholder="https://res.cloudinary.com/..."
                      style={styles.inputFull}
                    />
                  </div>
                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Thumbnail URL (optional)</label>
                    <input
                      type="text"
                      value={video.thumbnail || ''}
                      onChange={(e) =>
                        updateVideoUrl(activeTab, index, 'thumbnail', e.target.value || undefined)
                      }
                      placeholder="Leave empty to use video first frame"
                      style={styles.inputFull}
                    />
                  </div>
                </div>
                <button onClick={() => removeVideo(activeTab, index)} style={styles.removeBtn}>
                  X
                </button>
              </div>
            ))}
          </div>

          <button onClick={() => addVideo(activeTab)} style={styles.addVideoBtn}>
            + Add Video
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0a0a',
    color: '#fff',
    fontFamily: "'Poppins', system-ui, sans-serif",
    padding: '24px 32px',
  },
  loading: {
    minHeight: '100vh',
    background: '#0a0a0a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: 32,
    height: 32,
    border: '3px solid #333',
    borderTop: '3px solid #7e56dc',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    flexWrap: 'wrap',
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    margin: '4px 0 0',
  },
  saveBtn: {
    background: '#4ade80',
    color: '#000',
    border: 'none',
    padding: '10px 24px',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
  },
  message: {
    fontSize: 14,
    fontWeight: 500,
  },
  tabBar: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tab: {
    padding: '8px 16px',
    borderRadius: 20,
    border: '1px solid #333',
    background: '#111',
    color: '#aaa',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  tabActive: {
    background: '#7e56dc',
    color: '#fff',
    border: '1px solid #7e56dc',
  },
  addTabRow: {
    display: 'flex',
    gap: 8,
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  input: {
    background: '#111',
    border: '1px solid #333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: 8,
    fontSize: 14,
    width: 200,
    outline: 'none',
  },
  select: {
    background: '#111',
    border: '1px solid #333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: 8,
    fontSize: 14,
    outline: 'none',
  },
  addBtn: {
    background: '#7e56dc',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
  },
  content: {
    background: '#111',
    border: '1px solid #222',
    borderRadius: 12,
    padding: 24,
  },
  tabHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
    gap: 12,
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: 600,
    margin: 0,
    textTransform: 'capitalize',
  },
  layoutBtn: {
    background: '#1a1a2e',
    color: '#cfeb6c',
    border: '1px solid #333',
    padding: '6px 14px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    textTransform: 'capitalize',
  },
  deleteTabBtn: {
    background: '#2a1010',
    color: '#f87171',
    border: '1px solid #5c2020',
    padding: '6px 14px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
  },
  videoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  videoCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    background: '#0a0a0a',
    border: '1px solid #222',
    borderRadius: 8,
    padding: 16,
  },
  videoNumber: {
    background: '#7e56dc',
    color: '#fff',
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 600,
    flexShrink: 0,
    marginTop: 4,
  },
  videoFields: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontSize: 11,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  inputFull: {
    background: '#151515',
    border: '1px solid #333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: 6,
    fontSize: 13,
    width: '100%',
    outline: 'none',
    boxSizing: 'border-box',
  },
  removeBtn: {
    background: '#2a1010',
    color: '#f87171',
    border: '1px solid #5c2020',
    width: 28,
    height: 28,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    flexShrink: 0,
    marginTop: 4,
  },
  addVideoBtn: {
    marginTop: 16,
    background: '#1a1a2e',
    color: '#7e56dc',
    border: '1px dashed #7e56dc',
    padding: '10px 20px',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
    width: '100%',
  },
};
