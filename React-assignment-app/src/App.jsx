import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';
import AnimatedCard from './components/AnimatedCard';
import ResponsiveExample from './components/ResponsiveExample';

const App = () => {
  const navbarLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Tasks', href: '#tasks' },
    { label: 'Posts', href: '#posts' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      items: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ];

  return (
    <ThemeProvider>
      <Layout
        navbarProps={{ links: navbarLinks }}
        footerProps={{ links: footerLinks }}
      >
        <div className="container mx-auto px-4 py-8">
          <section id="tasks" className="mb-12">
            <TaskManager />
          </section>
          <section id="posts">
            <PostList />
          </section>
          <AnimatedCard />
          <ResponsiveExample />
        </div>
      </Layout>
    </ThemeProvider>

  );
};

export default App;