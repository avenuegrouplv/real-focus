// Fix: Added missing React import to resolve the 'Cannot find namespace React' error for React.ReactNode.
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CompanyType {
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}