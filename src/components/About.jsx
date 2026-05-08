import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am a passionate Front-End Developer learning how to build modern web applications using React and Tailwind CSS. I enjoy creating interactive and user-friendly interfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Skills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• React & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• HTML & CSS</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Technesse 2026</li>
                <li>• Front-End Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
