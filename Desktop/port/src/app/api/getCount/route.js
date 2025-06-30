import { NextResponse } from 'next/server';
import { connect } from '../../dbConfig/dbConfig';
import Count from '../../model/viewsModel';

export async function POST() {
  try {
    await connect();

    const updatedDoc = await Count.findByIdAndUpdate(
      "6842b93ef6167d87d7942ab9",
      { $inc: { viewsCount: 1 } }, // Fix here
      { new: true , upsert: true}
    );

    return NextResponse.json({ success: true, viewsCount: updatedDoc });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'Failed to update count' }, { status: 500 });
  }
}


