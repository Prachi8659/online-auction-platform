# 🏷️ Online Auction Platform

> **A real-time MERN-based auction platform for competitive bidding, auction management, and secure transactions.**

---

## 🗺️ Project Overview

A full-stack auction platform designed to manage the complete auction lifecycle — from product listing and competitive bidding to auction completion and payment processing.

| **Module** | **Key Features** |
| ---------- | ---------------- |
| **01** | **User Authentication & Authorization** — JWT, RBAC, password recovery |
| **02** | **Auction Management** — Create, update, and manage auction listings |
| **03** | **Real-Time Bidding** — Competitive bidding with live auction updates |
| **04** | **Admin Dashboard** — User, auction, and category management |
| **05** | **Payment Processing** — Stripe integration |
| **06** | **Media Management** — Cloudinary-based image storage |

---

## ⚡ Real-Time Bidding

Real-time auction updates are implemented using **MongoDB Change Streams** with a configured **MongoDB Replica Set (`rs0`)**.

```text
User → Place Bid → REST API → MongoDB
                         ↓
                  Change Stream
                         ↓
              Real-Time Auction Update