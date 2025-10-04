import React from 'react';
import LocalMain from '../components/LocalSchool/LocalMain';
import LocalEduSystem from '../components/LocalSchool/LocalEduSystem';
import LocalWhy from '../components/LocalSchool/LocalWhy';
import LocalSchools from '../components/LocalSchool/LocalSchools';


export default function SchoolPage() {
  return (
    <div>
      <LocalMain />
      <LocalEduSystem />
      <LocalWhy />
      <LocalSchools />
    </div>
  );
}
