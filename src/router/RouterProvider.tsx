import { createBrowserRouter, RouteObject, RouterProvider as ReactRouterProvider } from 'react-router-dom';

import {
  RootRoute,
  ErrorRoute,
  BlogsRoute,
  DashboardRoute,
  FoodsRoute,
  JournalRoute,
  MedicationsRoute,
  MemoRoute,
  PetInfoRoute,
  VetVisitRoute,
  VetVisitsRoute,
} from './routes';

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
  { path: '/', index: true, title: '대쉬보드', subtitle: 'Dashboard', element: <DashboardRoute /> },
  { path: '/pet-info/:id', title: '펫 정보', subtitle: 'Pet Info', element: <PetInfoRoute /> },
  { path: '/vet-visits', title: '병원 방문 이력', subtitle: 'Vet Visits', element: <VetVisitsRoute /> },
  { path: '/vet-visits/:id', title: '병원 방문 기록', subtitle: 'Vet Visit', element: <VetVisitRoute /> },
  { path: '/foods', title: '사료/간식 구입 목록', subtitle: 'Foods/Treats/Supplements', element: <FoodsRoute /> },
  { path: '/medications', title: '약 복용 관리', subtitle: 'Medications', element: <MedicationsRoute /> },
  { path: '/blogs', title: '육묘일기 & 메모', subtitle: 'Journals & Memos', element: <BlogsRoute /> },
  { path: '/journals/:id', title: '육묘일기', subtitle: 'Journal', element: <JournalRoute /> },
  { path: '/memos/:id', title: '메모', subtitle: 'Memo', element: <MemoRoute /> },
  { path: '/error', title: 'Error', element: <ErrorRoute /> },
];

export default function RouterProvider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootRoute />,
      errorElement: <ErrorRoute />,
      children: routes,
    },
  ]);

  return <ReactRouterProvider router={router} />;
}
