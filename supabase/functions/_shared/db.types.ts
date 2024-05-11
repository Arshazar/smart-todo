export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_conversations: {
        Row: {
          answer: string | null
          embedding: string | null
          id: string
          question: string | null
        }
        Insert: {
          answer?: string | null
          embedding?: string | null
          id?: string
          question?: string | null
        }
        Update: {
          answer?: string | null
          embedding?: string | null
          id?: string
          question?: string | null
        }
        Relationships: []
      }
      ai_messages: {
        Row: {
          content: string | null
          created_at: string
          id: string
          is_read_by_user: boolean | null
          related_user: string | null
          sender_type: Database["public"]["Enums"]["message_sender_type"]
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          is_read_by_user?: boolean | null
          related_user?: string | null
          sender_type: Database["public"]["Enums"]["message_sender_type"]
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          is_read_by_user?: boolean | null
          related_user?: string | null
          sender_type?: Database["public"]["Enums"]["message_sender_type"]
        }
        Relationships: [
          {
            foreignKeyName: "public_ai_messages_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      body_compositions: {
        Row: {
          biceps: number | null
          body_shape: string | null
          calf: number | null
          chest: number | null
          created_at: string
          fat_percentage: number | null
          fat_storage: Database["public"]["Enums"]["body_part_type"][] | null
          forearm: number | null
          glutes: number | null
          hip: number | null
          id: string
          neck: number | null
          related_user: string | null
          shoulders: number | null
          thigh: number | null
          waist: number | null
          weight: number | null
          wrist: number | null
        }
        Insert: {
          biceps?: number | null
          body_shape?: string | null
          calf?: number | null
          chest?: number | null
          created_at?: string
          fat_percentage?: number | null
          fat_storage?: Database["public"]["Enums"]["body_part_type"][] | null
          forearm?: number | null
          glutes?: number | null
          hip?: number | null
          id?: string
          neck?: number | null
          related_user?: string | null
          shoulders?: number | null
          thigh?: number | null
          waist?: number | null
          weight?: number | null
          wrist?: number | null
        }
        Update: {
          biceps?: number | null
          body_shape?: string | null
          calf?: number | null
          chest?: number | null
          created_at?: string
          fat_percentage?: number | null
          fat_storage?: Database["public"]["Enums"]["body_part_type"][] | null
          forearm?: number | null
          glutes?: number | null
          hip?: number | null
          id?: string
          neck?: number | null
          related_user?: string | null
          shoulders?: number | null
          thigh?: number | null
          waist?: number | null
          weight?: number | null
          wrist?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_body_compositions_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: string
          related_user: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          related_user?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          related_user?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      coaches: {
        Row: {
          avatar: string | null
          birthdate: string | null
          career_start_date: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string | null
          faq: string | null
          full_name: string | null
          id: string
          phone_number: string | null
          profession: string | null
          proficiency: string | null
        }
        Insert: {
          avatar?: string | null
          birthdate?: string | null
          career_start_date?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          faq?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          profession?: string | null
          proficiency?: string | null
        }
        Update: {
          avatar?: string | null
          birthdate?: string | null
          career_start_date?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          faq?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          profession?: string | null
          proficiency?: string | null
        }
        Relationships: []
      }
      instructions: {
        Row: {
          content: string | null
          created_at: string
          id: string
          related_coach: string | null
          related_user: string | null
          type: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          related_coach?: string | null
          related_user?: string | null
          type?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          related_coach?: string | null
          related_user?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_instructions_related_coach_fkey"
            columns: ["related_coach"]
            isOneToOne: false
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_instructions_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: Json | null
          created_at: string
          id: string
          is_read_by_coach: boolean | null
          is_read_by_user: boolean | null
          related_coach: string | null
          related_user: string | null
          sender_type: Database["public"]["Enums"]["message_sender_type"]
        }
        Insert: {
          content?: Json | null
          created_at?: string
          id?: string
          is_read_by_coach?: boolean | null
          is_read_by_user?: boolean | null
          related_coach?: string | null
          related_user?: string | null
          sender_type: Database["public"]["Enums"]["message_sender_type"]
        }
        Update: {
          content?: Json | null
          created_at?: string
          id?: string
          is_read_by_coach?: boolean | null
          is_read_by_user?: boolean | null
          related_coach?: string | null
          related_user?: string | null
          sender_type?: Database["public"]["Enums"]["message_sender_type"]
        }
        Relationships: [
          {
            foreignKeyName: "public_messages_related_coach_fkey"
            columns: ["related_coach"]
            isOneToOne: false
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_messages_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      mind_comments: {
        Row: {
          content: string | null
          created_at: string
          id: string
          related_user: string | null
          time: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          time?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_mind_comments_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      nutrition_comments: {
        Row: {
          content: string | null
          created_at: string
          id: string
          related_user: string | null
          time: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          time?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_nutrition_comments_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      nutrition_docs: {
        Row: {
          content: Json | null
          created_at: string
          embedding: string | null
          id: number
          name: string
        }
        Insert: {
          content?: Json | null
          created_at?: string
          embedding?: string | null
          id?: never
          name: string
        }
        Update: {
          content?: Json | null
          created_at?: string
          embedding?: string | null
          id?: never
          name?: string
        }
        Relationships: []
      }
      public_notifications: {
        Row: {
          content: string | null
          created_at: string
          id: string
          link: Json | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          link?: Json | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          link?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          annual_monthly_price: number | null
          details: Json | null
          id: string
          monthly_price: number | null
          price_unit: string | null
          title: string | null
        }
        Insert: {
          annual_monthly_price?: number | null
          details?: Json | null
          id?: string
          monthly_price?: number | null
          price_unit?: string | null
          title?: string | null
        }
        Update: {
          annual_monthly_price?: number | null
          details?: Json | null
          id?: string
          monthly_price?: number | null
          price_unit?: string | null
          title?: string | null
        }
        Relationships: []
      }
      support_messages: {
        Row: {
          content: Json | null
          created_at: string
          id: string
          is_read_by_coach: boolean | null
          is_read_by_support: boolean | null
          is_read_by_user: boolean | null
          related_coach: string | null
          related_user: string | null
          sender_type: Database["public"]["Enums"]["message_sender_type"]
        }
        Insert: {
          content?: Json | null
          created_at?: string
          id?: string
          is_read_by_coach?: boolean | null
          is_read_by_support?: boolean | null
          is_read_by_user?: boolean | null
          related_coach?: string | null
          related_user?: string | null
          sender_type: Database["public"]["Enums"]["message_sender_type"]
        }
        Update: {
          content?: Json | null
          created_at?: string
          id?: string
          is_read_by_coach?: boolean | null
          is_read_by_support?: boolean | null
          is_read_by_user?: boolean | null
          related_coach?: string | null
          related_user?: string | null
          sender_type?: Database["public"]["Enums"]["message_sender_type"]
        }
        Relationships: [
          {
            foreignKeyName: "public_support_messages_related_coach_fkey"
            columns: ["related_coach"]
            isOneToOne: false
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_messages_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activities: {
        Row: {
          created_at: string
          general_daily: string | null
          id: string
          related_user: string | null
          sports_participation: number | null
          type: string | null
          workout_schedule: string[] | null
        }
        Insert: {
          created_at?: string
          general_daily?: string | null
          id?: string
          related_user?: string | null
          sports_participation?: number | null
          type?: string | null
          workout_schedule?: string[] | null
        }
        Update: {
          created_at?: string
          general_daily?: string | null
          id?: string
          related_user?: string | null
          sports_participation?: number | null
          type?: string | null
          workout_schedule?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_activities_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_backgrounds: {
        Row: {
          content: string | null
          created_at: string
          id: string
          related_user: string | null
          type: Database["public"]["Enums"]["user_bg_type"] | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          type?: Database["public"]["Enums"]["user_bg_type"] | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          type?: Database["public"]["Enums"]["user_bg_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_backgrounds_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_checkins: {
        Row: {
          anxiety_levels: string | null
          biceps: number | null
          calf: number | null
          chest: number | null
          created_at: string
          emotional_volatility: string | null
          energy_volatility: string | null
          fat_percentage: number | null
          forearm: number | null
          glutes: number | null
          hip: number | null
          hunger_level: string | null
          id: string
          motivation_level: string | null
          muscle_mass: number | null
          neck: number | null
          photos: string[] | null
          recover_lapse_unit: string | null
          recovery_lapse: number | null
          related_user: string | null
          sensitivity_to_cravings: string | null
          sex_drive: string | null
          shoulders: number | null
          thigh: number | null
          waist: number | null
          wakefulness_quality: string | null
          weight: number | null
          wrist: number | null
        }
        Insert: {
          anxiety_levels?: string | null
          biceps?: number | null
          calf?: number | null
          chest?: number | null
          created_at?: string
          emotional_volatility?: string | null
          energy_volatility?: string | null
          fat_percentage?: number | null
          forearm?: number | null
          glutes?: number | null
          hip?: number | null
          hunger_level?: string | null
          id?: string
          motivation_level?: string | null
          muscle_mass?: number | null
          neck?: number | null
          photos?: string[] | null
          recover_lapse_unit?: string | null
          recovery_lapse?: number | null
          related_user?: string | null
          sensitivity_to_cravings?: string | null
          sex_drive?: string | null
          shoulders?: number | null
          thigh?: number | null
          waist?: number | null
          wakefulness_quality?: string | null
          weight?: number | null
          wrist?: number | null
        }
        Update: {
          anxiety_levels?: string | null
          biceps?: number | null
          calf?: number | null
          chest?: number | null
          created_at?: string
          emotional_volatility?: string | null
          energy_volatility?: string | null
          fat_percentage?: number | null
          forearm?: number | null
          glutes?: number | null
          hip?: number | null
          hunger_level?: string | null
          id?: string
          motivation_level?: string | null
          muscle_mass?: number | null
          neck?: number | null
          photos?: string[] | null
          recover_lapse_unit?: string | null
          recovery_lapse?: number | null
          related_user?: string | null
          sensitivity_to_cravings?: string | null
          sex_drive?: string | null
          shoulders?: number | null
          thigh?: number | null
          waist?: number | null
          wakefulness_quality?: string | null
          weight?: number | null
          wrist?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_checkins_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_commitments: {
        Row: {
          created_at: string
          days_in_week: number | null
          goal_fat_percentage: number | null
          goal_weight: number | null
          id: string
          ideal_body_photos: string[] | null
          importance: string | null
          investing_capital: number | null
          investing_capital_period:
            | Database["public"]["Enums"]["time_unit_type"]
            | null
          investing_time: number | null
          investing_time_period:
            | Database["public"]["Enums"]["time_unit_type"]
            | null
          level: number
          long_term_goals: string | null
          main_challenges: string | null
          main_concerns: string | null
          reasons: string | null
          related_user: string | null
          short_term_goals: string | null
        }
        Insert: {
          created_at?: string
          days_in_week?: number | null
          goal_fat_percentage?: number | null
          goal_weight?: number | null
          id?: string
          ideal_body_photos?: string[] | null
          importance?: string | null
          investing_capital?: number | null
          investing_capital_period?:
            | Database["public"]["Enums"]["time_unit_type"]
            | null
          investing_time?: number | null
          investing_time_period?:
            | Database["public"]["Enums"]["time_unit_type"]
            | null
          level?: number
          long_term_goals?: string | null
          main_challenges?: string | null
          main_concerns?: string | null
          reasons?: string | null
          related_user?: string | null
          short_term_goals?: string | null
        }
        Update: {
          created_at?: string
          days_in_week?: number | null
          goal_fat_percentage?: number | null
          goal_weight?: number | null
          id?: string
          ideal_body_photos?: string[] | null
          importance?: string | null
          investing_capital?: number | null
          investing_capital_period?:
            | Database["public"]["Enums"]["time_unit_type"]
            | null
          investing_time?: number | null
          investing_time_period?:
            | Database["public"]["Enums"]["time_unit_type"]
            | null
          level?: number
          long_term_goals?: string | null
          main_challenges?: string | null
          main_concerns?: string | null
          reasons?: string | null
          related_user?: string | null
          short_term_goals?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_commitments_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_experiences: {
        Row: {
          content: string | null
          created_at: string
          id: number
          related_user: string | null
          type: Database["public"]["Enums"]["user_experience_type"] | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          related_user?: string | null
          type?: Database["public"]["Enums"]["user_experience_type"] | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          related_user?: string | null
          type?: Database["public"]["Enums"]["user_experience_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_experiences_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_general_beings: {
        Row: {
          anxiety_level: string | null
          craving_sensitivity: string | null
          created_at: string
          distraction_sensitivity: string | null
          emotional_volatility: string | null
          energy_level: string | null
          energy_volatility: string | null
          hunger_level: string | null
          id: string
          motivation_level: string | null
          overwhelming_threshold: string | null
          pain_reactivity: string | null
          recovery_period: number | null
          related_user: string | null
          sex_drive: string | null
          wakefulness_quality: string | null
        }
        Insert: {
          anxiety_level?: string | null
          craving_sensitivity?: string | null
          created_at?: string
          distraction_sensitivity?: string | null
          emotional_volatility?: string | null
          energy_level?: string | null
          energy_volatility?: string | null
          hunger_level?: string | null
          id?: string
          motivation_level?: string | null
          overwhelming_threshold?: string | null
          pain_reactivity?: string | null
          recovery_period?: number | null
          related_user?: string | null
          sex_drive?: string | null
          wakefulness_quality?: string | null
        }
        Update: {
          anxiety_level?: string | null
          craving_sensitivity?: string | null
          created_at?: string
          distraction_sensitivity?: string | null
          emotional_volatility?: string | null
          energy_level?: string | null
          energy_volatility?: string | null
          hunger_level?: string | null
          id?: string
          motivation_level?: string | null
          overwhelming_threshold?: string | null
          pain_reactivity?: string | null
          recovery_period?: number | null
          related_user?: string | null
          sex_drive?: string | null
          wakefulness_quality?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_general_beings_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_intakes: {
        Row: {
          created_at: string
          id: string
          period: Database["public"]["Enums"]["time_unit_type"] | null
          related_user: string | null
          type: Database["public"]["Enums"]["intake_type"] | null
          unit: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          period?: Database["public"]["Enums"]["time_unit_type"] | null
          related_user?: string | null
          type?: Database["public"]["Enums"]["intake_type"] | null
          unit?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          period?: Database["public"]["Enums"]["time_unit_type"] | null
          related_user?: string | null
          type?: Database["public"]["Enums"]["intake_type"] | null
          unit?: string | null
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_intakes_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_lifestyles: {
        Row: {
          created_at: string
          first_meal_hour: string | null
          food_love: string[] | null
          food_preferences: string[] | null
          id: string
          last_meal_hour: string | null
          related_user: string | null
          sleeping_hours_range: string[] | null
          snack_love: string | null
          snack_routine: string | null
          snack_routines: string[] | null
          water_with_food: boolean
          working_hours_range: string[] | null
        }
        Insert: {
          created_at?: string
          first_meal_hour?: string | null
          food_love?: string[] | null
          food_preferences?: string[] | null
          id?: string
          last_meal_hour?: string | null
          related_user?: string | null
          sleeping_hours_range?: string[] | null
          snack_love?: string | null
          snack_routine?: string | null
          snack_routines?: string[] | null
          water_with_food?: boolean
          working_hours_range?: string[] | null
        }
        Update: {
          created_at?: string
          first_meal_hour?: string | null
          food_love?: string[] | null
          food_preferences?: string[] | null
          id?: string
          last_meal_hour?: string | null
          related_user?: string | null
          sleeping_hours_range?: string[] | null
          snack_love?: string | null
          snack_routine?: string | null
          snack_routines?: string[] | null
          water_with_food?: boolean
          working_hours_range?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_lifestyles_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_meals: {
        Row: {
          amount_unit: Database["public"]["Enums"]["mass_unit_type"] | null
          calories: number | null
          carbohydrate_amount: number | null
          compliance_percentage: number | null
          content: string | null
          created_at: string
          fat_amount: number | null
          id: string
          protein_amount: number | null
          related_category: string | null
          related_user: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          amount_unit?: Database["public"]["Enums"]["mass_unit_type"] | null
          calories?: number | null
          carbohydrate_amount?: number | null
          compliance_percentage?: number | null
          content?: string | null
          created_at?: string
          fat_amount?: number | null
          id?: string
          protein_amount?: number | null
          related_category?: string | null
          related_user?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          amount_unit?: Database["public"]["Enums"]["mass_unit_type"] | null
          calories?: number | null
          carbohydrate_amount?: number | null
          compliance_percentage?: number | null
          content?: string | null
          created_at?: string
          fat_amount?: number | null
          id?: string
          protein_amount?: number | null
          related_category?: string | null
          related_user?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_meals_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_meals_related_category_fkey"
            columns: ["related_category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_meals_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_mental_exercises: {
        Row: {
          content: string | null
          created_at: string
          id: string
          related_category: string | null
          related_user: string | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          related_category?: string | null
          related_user?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          related_category?: string | null
          related_user?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_mental_exercises_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_mental_exercises_related_category_fkey"
            columns: ["related_category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notifications: {
        Row: {
          content: string | null
          created_at: string
          id: string
          is_read: boolean
          link: Json | null
          related_public_notification: string | null
          related_user: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          link?: Json | null
          related_public_notification?: string | null
          related_user?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          link?: Json | null
          related_public_notification?: string | null
          related_user?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_notifications_related_public_notification_fkey"
            columns: ["related_public_notification"]
            isOneToOne: false
            referencedRelation: "public_notifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_notifications_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_sub_meals: {
        Row: {
          amount_unit: Database["public"]["Enums"]["mass_unit_type"] | null
          calories: number | null
          carbohydrate_amount: number | null
          content: string | null
          created_at: string
          fat_amount: number | null
          id: string
          protein_amount: number | null
          related_meal: string | null
          time: string | null
          updated_at: string | null
        }
        Insert: {
          amount_unit?: Database["public"]["Enums"]["mass_unit_type"] | null
          calories?: number | null
          carbohydrate_amount?: number | null
          content?: string | null
          created_at?: string
          fat_amount?: number | null
          id?: string
          protein_amount?: number | null
          related_meal?: string | null
          time?: string | null
          updated_at?: string | null
        }
        Update: {
          amount_unit?: Database["public"]["Enums"]["mass_unit_type"] | null
          calories?: number | null
          carbohydrate_amount?: number | null
          content?: string | null
          created_at?: string
          fat_amount?: number | null
          id?: string
          protein_amount?: number | null
          related_meal?: string | null
          time?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_sub_meals_related_meal_fkey"
            columns: ["related_meal"]
            isOneToOne: false
            referencedRelation: "user_meals"
            referencedColumns: ["id"]
          },
        ]
      }
      user_weekly_workouts: {
        Row: {
          created_at: string
          days_in_week: number | null
          id: string
          intensity: string | null
          name: string | null
          related_user: string | null
        }
        Insert: {
          created_at?: string
          days_in_week?: number | null
          id?: string
          intensity?: string | null
          name?: string | null
          related_user?: string | null
        }
        Update: {
          created_at?: string
          days_in_week?: number | null
          id?: string
          intensity?: string | null
          name?: string | null
          related_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_weekly_workouts_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_workouts: {
        Row: {
          amount: string | null
          amount_unit: string | null
          calories: number | null
          content: string | null
          created_at: string
          id: string
          related_category: string | null
          related_user: string | null
        }
        Insert: {
          amount?: string | null
          amount_unit?: string | null
          calories?: number | null
          content?: string | null
          created_at?: string
          id?: string
          related_category?: string | null
          related_user?: string | null
        }
        Update: {
          amount?: string | null
          amount_unit?: string | null
          calories?: number | null
          content?: string | null
          created_at?: string
          id?: string
          related_category?: string | null
          related_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_sub_workouts_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_workouts_related_category_fkey"
            columns: ["related_category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar: string | null
          birth_date: string | null
          blood_type: Database["public"]["Enums"]["blood_type"] | null
          body_type: Database["public"]["Enums"]["body_type"] | null
          created_at: string
          email: string | null
          full_name: string | null
          gender: Database["public"]["Enums"]["gender"]
          goal_weight: number | null
          height: number | null
          height_unit: Database["public"]["Enums"]["length_type"] | null
          id: string
          init_weight: number | null
          measuring_unit: Database["public"]["Enums"]["length_type"] | null
          phone_number: string | null
          prev_weight: number | null
          receive_email: boolean
          related_coach: string | null
          subscription_end_date: string | null
          subscription_plan: string | null
          subscription_start_date: string | null
          weight: number | null
          weight_unit: Database["public"]["Enums"]["mass_unit_type"] | null
        }
        Insert: {
          avatar?: string | null
          birth_date?: string | null
          blood_type?: Database["public"]["Enums"]["blood_type"] | null
          body_type?: Database["public"]["Enums"]["body_type"] | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["gender"]
          goal_weight?: number | null
          height?: number | null
          height_unit?: Database["public"]["Enums"]["length_type"] | null
          id?: string
          init_weight?: number | null
          measuring_unit?: Database["public"]["Enums"]["length_type"] | null
          phone_number?: string | null
          prev_weight?: number | null
          receive_email?: boolean
          related_coach?: string | null
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          weight?: number | null
          weight_unit?: Database["public"]["Enums"]["mass_unit_type"] | null
        }
        Update: {
          avatar?: string | null
          birth_date?: string | null
          blood_type?: Database["public"]["Enums"]["blood_type"] | null
          body_type?: Database["public"]["Enums"]["body_type"] | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["gender"]
          goal_weight?: number | null
          height?: number | null
          height_unit?: Database["public"]["Enums"]["length_type"] | null
          id?: string
          init_weight?: number | null
          measuring_unit?: Database["public"]["Enums"]["length_type"] | null
          phone_number?: string | null
          prev_weight?: number | null
          receive_email?: boolean
          related_coach?: string | null
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          weight?: number | null
          weight_unit?: Database["public"]["Enums"]["mass_unit_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_users_related_coach_fkey"
            columns: ["related_coach"]
            isOneToOne: false
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_users_subscription_plan_fkey"
            columns: ["subscription_plan"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_comments: {
        Row: {
          content: string | null
          created_at: string
          id: string
          related_user: string | null
          time: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          time?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          related_user?: string | null
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_workout_comments_related_user_fkey"
            columns: ["related_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_user_meal: {
        Args: {
          data: Json[]
        }
        Returns: undefined
      }
      match_conversations: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          id: string
          content: string
          similarity: number
        }[]
      }
      match_nutrition_docs: {
        Args: {
          embedding: string
          match_threshold: number
        }
        Returns: {
          content: Json | null
          created_at: string
          embedding: string | null
          id: number
          name: string
        }[]
      }
      supabase_url: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      blood_type: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-"
      body_part_type:
        | "abs"
        | "chest"
        | "arms"
        | "legs"
        | "face"
        | "abdominal"
        | "thighs"
        | "hip"
        | "neck"
      body_type: "endomorph" | "ectomorph" | "mesomorph"
      exertion_intensity_type: "light" | "moderate" | "vigorous"
      food_units:
        | "ml"
        | "lit"
        | "oz"
        | "handful"
        | "plate"
        | "cup"
        | "sp"
        | "tsp"
        | "mg"
        | "g"
        | "kg"
        | "lb"
        | "pieces"
      gender: "male" | "female"
      intake_type:
        | "water"
        | "caffeine"
        | "alcohol"
        | "fast food"
        | "vegetable"
        | "protein"
        | "typical meal plate"
        | "average meals"
        | "supplements"
      length_type: "cm" | "m" | "ft/in" | "in"
      mass_unit_type: "mg" | "g" | "kg" | "lb" | "oz"
      meal_type:
        | "breakfast"
        | "brunch"
        | "lunch"
        | "snack"
        | "dinner"
        | "water"
        | "supplements"
      message_sender_type: "user" | "coach" | "support" | "assistant" | "system"
      subscription_plan_type: "free" | "pro"
      time_unit_type:
        | "millisecond"
        | "second"
        | "minute"
        | "hour"
        | "day"
        | "week"
        | "month"
        | "year"
      user_bg_type:
        | "health"
        | "injury"
        | "allergy"
        | "disease"
        | "complication"
        | "medication"
        | "food restriction"
      user_experience_type:
        | "diet"
        | "workout plan"
        | "weight loss"
        | "muscle gain"
        | "athletic career"
      volume_unit_type:
        | "ml"
        | "lit"
        | "oz"
        | "handful"
        | "plate"
        | "cup"
        | "sp"
        | "tsp"
        | "tbsp"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
