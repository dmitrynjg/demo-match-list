'use client';
import { Layout } from '@/shared';
import { StatusMatch, MatchType } from '@/entities';
import { MatchList, NavBar, normalizeMatch, useGetMatchList } from '@/widgets';
import { useMemo, useState } from 'react';

export const HomePage = () => {
  const { data: items, isFetching, error, refetch } = useGetMatchList();
  const [status, setStatus] = useState<StatusMatch | null>(null);
  const list = useMemo<MatchType[]>(() => {
    if (!items) {
      return [];
    }

    if (!status) {
      return items.data.matches.map(normalizeMatch);
    }

    return items?.data.matches
      .filter((match) => match.status === status)
      .map(normalizeMatch);
  }, [items, status]);

  return (
    <Layout>
      <NavBar
        onSelectItem={setStatus}
        isLoading={isFetching}
        hasError={!!error}
        refetch={() => refetch()}
      />
      
      <MatchList
        items={list}
        isLoading={isFetching}
      />
    </Layout>
  );
};
