export interface DashboardStats {
  totalDocs: number;
  pendingDocs: number;
  signedDocs: number;
}

export interface DocumentType {
  id: string;
  title: string;
  fileUrl: string;
  status: string;
  ownerId: string;
  createdAt: Date;
}

export interface SignatureType {
  id: string;
  documentId: string;
  signerId: string;
  x: number;
  y: number;
  page: number;
  status: string;
}

export interface AuditLogType {
  id: string;
  documentId: string;
  action: string;
  createdAt: Date;
}
