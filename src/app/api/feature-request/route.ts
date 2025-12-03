import { NextRequest, NextResponse } from 'next/server';

interface FeatureRequestData {
  name: string;
  email: string;
  siteUrl?: string;
  description: string;
  assetsUrl?: string;
  budget: string;
  urgency: string;
  consent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const data: FeatureRequestData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.description || !data.budget || !data.urgency || !data.consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission (in production, this would integrate with email service)
    console.log('=== FEATURE REQUEST SUBMISSION ===');
    console.log('Name:', data.name);
    console.log('Email:', data.email);
    console.log('Site URL:', data.siteUrl || 'Not provided');
    console.log('Description:', data.description);
    console.log('Assets URL:', data.assetsUrl || 'Not provided');
    console.log('Budget:', data.budget);
    console.log('Urgency:', data.urgency);
    console.log('Consent:', data.consent);
    console.log('Timestamp:', new Date().toISOString());
    console.log('================================');

    // TODO: Integrate with email service (Resend/Sendgrid)
    // TODO: Save to database/CRM
    // TODO: Send confirmation email to client
    // TODO: Send notification to internal team

    // TODO: For Stripe integration later:
    // - Use setup_future_usage: 'off_session' for payment links
    // - Create PaymentLink for 50% advance payment after quote acceptance
    // - Store customer info for future payment processing

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('Feature request submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

