import { artists } from '@/data/artists';
import { notFound } from 'next/navigation';
import ArtistProfileClient from '@/components/ArtistProfileClient';

export function generateStaticParams() {
    return artists.map((artist) => ({
        slug: artist.slug,
    }));
}

export default async function ArtistProfile({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const artist = artists.find((a) => a.slug === slug);

    if (!artist) {
        notFound();
    }

    return <ArtistProfileClient artist={artist} />;
}
