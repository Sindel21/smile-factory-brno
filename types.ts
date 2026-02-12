
// Add React import to fix namespace error for React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface InsurancePartner {
  name: string;
  id: string;
}