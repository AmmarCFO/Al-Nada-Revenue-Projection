
import { Scenario, ScenarioType, MarketingVideo, Branch, ComparisonLink } from './types';

export const FURNISHING_COST_PER_UNIT = 50250;
export const MABAAT_SHARE_PERCENTAGE = 0.25;
export const COMP_SET_SHEET_URL = "https://docs.google.com/spreadsheets/d/1qpz5XSqgJpHx7WrRuPAgqmRgnkwdKS0vh1nVJXlv1dA/edit?usp=sharing";

export const SCENARIOS: Scenario[] = [
  {
    id: 'coliving_strategy',
    type: ScenarioType.LONG_TERM,
    name: 'Al Nada Coliving Strategy',
    color: '#2A5B64', // Teal
    description: 'Conversion of 28 apartments into a high-yield Coliving Community. Strategy shifts to maximizing capacity with 27 units converted to mixed suites (1 Master + 2 Singles) and 1 dedicated female unit.',
    
    financials: {
        worst: {
            // (27 * 9500) + (1 * 6200)
            // 256,500 + 6,200 = 262,700 * 12
            revenue: 3152400, 
            mabaatShare: 0, // Calculated dynamically in App
            netIncome: 0,   // Calculated dynamically in App
            roi: 0
        },
        base: {
             // (27 * 10000) + (1 * 6500)
             // 270,000 + 6,500 = 276,500 * 12
            revenue: 3318000, 
            mabaatShare: 0, 
            netIncome: 0, 
            roi: 0
        },
        best: {
             // (27 * 10700) + (1 * 6800)
             // 288,900 + 6,800 = 295,700 * 12
            revenue: 3548400, 
            mabaatShare: 0, 
            netIncome: 0, 
            roi: 0
        }
    },

    propertyValue: 0, 
    
    unitCount: 28, 
    unitLabel: 'Units',
    occupancyDurationLabel: 'Flexible Contracts',
    
    unitMix: [
        { 
            name: 'Converted 2BR (1 Master + 2 Singles)', 
            count: 27, 
            avgPrice: 10000, 
            priceRange: { 
                min: 9500, 
                avg: 10000, 
                max: 10700 
            }, 
        },
        { 
            name: 'Female 1BR (Private)', 
            count: 1, 
            avgPrice: 6500, 
            priceRange: { 
                min: 6200, 
                avg: 6500, 
                max: 6800 
            }, 
        }
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
    {
        id: 'v1',
        title: 'Community Overview',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://drive.google.com/file/d/1u6i_7MN74iogQP0qwdS9o2GYOHtWTZA4/view?usp=sharing',
    },
    {
        id: 'v2',
        title: 'Interior Walkthrough',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://drive.google.com/file/d/1dO3W-8IX8JultVN768H1hyxVVmxC4F2I/view?usp=sharing',
    }
];

export const COMPARISON_LINKS: Record<string, ComparisonLink[]> = {
  coliving_strategy: [
    {
        title: "Room in Shared Apartment - Al Nada",
        platform: "Bayut",
        url: "#",
        location: "Al Nada",
        type: "Room",
        price: 3500,
        period: "/mo"
    },
    {
        title: "Studio for Rent - Al Nada",
        platform: "Aqar",
        url: "#",
        location: "Al Nada",
        type: "Studio",
        price: 4500,
        period: "/mo"
    }
  ]
};

export const BRANCHES: Branch[] = [];
