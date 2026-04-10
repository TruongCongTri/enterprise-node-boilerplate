export const API_VERSION = '/api/v1';

export const ENDPOINTS = {
  AUTH: {
    BASE: '/auth',
    REGISTER: '/register',
    LOGIN: '/login',
    LOGOUT: '/logout',
    REFRESH_TOKEN: '/refresh-token',
    GOOGLE: '/google',
    GOOGLE_CALLBACK: '/google/callback',
    SEND_VERIFY_EMAIL: '/send-verify-email',
    VERIFY_EMAIL: '/verify-email',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    CHANGE_PASSWORD: '/change-password',
    SESSIONS: '/sessions',
    REVOKE_SESSION: '/sessions/:sessionId',
    REVOKE_OTHER_SESSIONS: '/sessions/others',
  },
  PUBLIC: {
    CATEGORIES: '/categories',
    COURSES: '/courses',
    COURSE_DETAIL: '/courses/:slug', // Chi tiết khóa học cho khách
    COURSE_REVIEWS: '/courses/:slug/reviews', // Xem review public
    INSTRUCTORS: '/instructors',
    INSTRUCTOR_DETAIL: '/instructors/:id', // Xem profile giảng viên
    WEBHOOK_PAYMENT: '/payments/webhook',
  },
  USER: {
    BASE: '/users/me',
    PROFILE: '/',
    AVATAR: '/avatar',
    PASSWORD: '/password',
    SESSIONS: '/sessions',
    EMAIL_CHANGE_REQUEST: '/request-email-change', // BỔ SUNG: Rào cản 3 tài liệu Auth
  },
  ADMIN: {
    BASE: '/admin',
    USERS: '/users',
    USER_SESSIONS: '/users/:id/sessions', // BỔ SUNG: Chức năng "Đá văng" user
    COURSES: '/courses',
    CATEGORIES: '/categories',
    ORDERS: '/orders',
    ORDER_REFUND: '/orders/:id/refund', // BỔ SUNG: Nghiệp vụ hoàn tiền
    ORDER_SYNC: '/orders/:id/query-payment-status', // BỔ SUNG: Rào cản 3 tài liệu Payment
    VOUCHERS: '/vouchers',
    SYSTEM: '/system',
    SYSTEM_HEALTH: '/system/health',
    FORBIDDEN_WORDS: '/system/forbidden-words', // BỔ SUNG: Quản lý từ cấm
  },
} as const;
