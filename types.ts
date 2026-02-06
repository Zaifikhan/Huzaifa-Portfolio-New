import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}