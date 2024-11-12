import {
  AtSign,
  Bitcoin,
  Calendar,
  FileText,
  IdCard,
  Link,
  Mail,
  ServerCrash,
  Twitter,
  Wifi
} from 'lucide-react';

export const data = [
  {
    id: 1,
    label: 'URL',
    icon: Link
  },
  {
    id: 2,
    label: 'VCARD',
    icon: IdCard
  },
  {
    id: 3,
    label: 'TEXT',
    icon: FileText
  },
  {
    id: 4,
    label: 'E-MAIL',
    icon: AtSign
  },
  {
    id: 5,
    label: 'SMS',
    icon: Mail
  },
  {
    id: 6,
    label: 'WiFi',
    icon: Wifi
  },
  {
    id: 7,
    label: 'BITCOIN',
    icon: Bitcoin
  },
  {
    id: 8,
    label: 'TWITTER',
    icon: Twitter
  },
  {
    id: 9,
    label: 'EVENT',
    icon: Calendar
  },
  {
    id: 10,
    label: 'DRIVE',
    icon: ServerCrash
  }
];

export type QRMode = (typeof data)[number];
