import { RouteObject } from 'react-router-dom';

import DashboardView from '@/views/dashboard/DashboardView';
import PetInfoView from '@/views/pet-info/PetInfoView';
import VetVisitsView from '@/views/vet-visits/VetVisitsView';
import VetVisitDetailView from '@/views/vet-visits/VetVisitDetailView';
import FoodsView from '@/views/foods/FoodsView';
import MedicationsView from '@/views/medications/MedicationsView';
import BlogsView from '@/views/blogs/BlogsView';
import JournalDetailView from '@/views/blogs/journals/JournalDetailView';
import MemoDetailView from '@/views/blogs/memos/MemoDetailView';

declare module 'react-router-dom' {
  interface IndexRouteObject {
    title?: string;
    subtitle?: string;
  }
  interface NonIndexRouteObject {
    title?: string;
    subtitle?: string;
  }
}

export const routes: RouteObject[] = [
  { path: '/', index: true, title: '대쉬보드', subtitle: 'Dashboard', element: <DashboardView /> },
  { path: '/pet-info/:id', title: '펫 정보', subtitle: 'Pet Info', element: <PetInfoView /> },
  { path: '/vet-visits', title: '병원 방문 이력', subtitle: 'Vet Visits', element: <VetVisitsView /> },
  { path: '/vet-visits/:id', title: '병원 방문 기록', subtitle: 'Vet Visit', element: <VetVisitDetailView /> },
  { path: '/foods', title: '사료/간식 구입 목록', subtitle: 'Foods/Treats/Supplements', element: <FoodsView /> },
  { path: '/medications', title: '약 복용 관리', subtitle: 'Medications', element: <MedicationsView /> },
  { path: '/blogs', title: '육묘일기 & 메모', subtitle: 'Journals & Memos', element: <BlogsView /> },
  { path: '/journals/:id', title: '육묘일기', subtitle: 'Journal', element: <JournalDetailView /> },
  { path: '/memos/:id', title: '메모', subtitle: 'Memo', element: <MemoDetailView /> },
];
