import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, Mail } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const PropertyOccupationComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', dueDate: '2023-09-15' },
    { id: 2, name: 'Retail Space B', status: 'Occupied', nextAction: 'Vacate', dueDate: '2023-10-01' },
    { id: 3, name: 'Office Building C', status: 'Vacant', nextAction: 'Occupy', dueDate: '2023-09-30' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Occupation Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Property A', amount: 5000, status: 'Pending', dueDate: '2023-09-30' },
    { id: 2, property: 'Property B', amount: 7500, status: 'Paid', dueDate: '2023-09-15' },
    { id: 3, property: 'Property C', amount: 6000, status: 'Overdue', dueDate: '2023-09-01' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Group - Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#1E40AF",
  secondaryColor: "#60A5FA",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyOccupation",
        label: "Property Occupation",
        description: "Manage property occupation cycles",
        icon: Home
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Process and track invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#1E40AF", "#60A5FA", "#BFDBFE"],
        data: [
          { name: 'Vacant', value: 30 },
          { name: 'Occupied', value: 50 },
          { name: 'In Transition', value: 20 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#1E40AF"],
        data: [
          { name: 'Pending', count: 15 },
          { name: 'Paid', count: 25 },
          { name: 'Overdue', count: 5 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      propertyOccupationCycles: {
        type: "line",
        dataKeys: ["cycles"],
        colors: ["#1E40AF"],
        data: [
          { month: 'Jan', cycles: 10 },
          { month: 'Feb', cycles: 12 },
          { month: 'Mar', cycles: 15 },
          { month: 'Apr', cycles: 11 },
        ]
      },
      invoiceProcessingEfficiency: {
        type: "bar",
        dataKeys: ["efficiency"],
        colors: ["#60A5FA"],
        data: [
          { week: 'Week 1', efficiency: 85 },
          { week: 'Week 2', efficiency: 90 },
          { week: 'Week 3', efficiency: 88 },
          { week: 'Week 4', efficiency: 92 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retail Chain", industry: "Retail" },
    { id: "client2", name: "Office Space Co", industry: "Commercial Real Estate" },
    { id: "client3", name: "Shopping Center Group", industry: "Retail" },
  ],
  features: {
    dataImport: true,
    analytics: true,
    reporting: true,
    emailAutomation: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyOccupation: PropertyOccupationComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyTypes: ['Retail', 'Office', 'Shopping Center'],
  occupationCycles: ['Vacant', 'Occupied', 'In Transition'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  actionTypes: ['Occupy', 'Vacate', 'Maintain']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};