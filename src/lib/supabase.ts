import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'one_min_startup'
  }
})

// 타입 정의
export type UserProfile = {
  id: string
  email: string
  created_at: string
}

export type LandingPage = {
  id: string
  user_id: string
  title: string
  content: any
  created_at: string
  updated_at: string
}

export type Subscriber = {
  id: string
  email: string
  landing_page_id: string
  created_at: string
}

export type Subscription = {
  id: string
  user_id: string
  plan_type: string
  status: string
  start_date: string
  end_date: string | null
  created_at: string
} 