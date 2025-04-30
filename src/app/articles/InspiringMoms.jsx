"use client";
import { useState } from "react";

export default function InspiringMoms() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>Inspiring Moms</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>Stories of mothers who changed the world.</p>

        {/* Article 1 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '100%', height: '200px', background: '#e0e0e0', marginBottom: '20px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Mother Teresa: A Beacon of Compassion</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Mother Teresa dedicated her life to helping the poor and sick, raising awareness about the plight of the underserved while nurturing a global community of care.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Born in 1910 in Skopje, she founded the Missionaries of Charity in Kolkata, India, providing shelter and love to thousands, all while inspiring her followers with her selfless acts.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Her legacy as a mother figure to the needy earned her the Nobel Peace Prize in 1979.</p>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '14px', borderRadius: '5px' }}>Read More</a>
        </div>

        {/* Article 2 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '100%', height: '200px', background: '#e0e0e0', marginBottom: '20px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Ann Dunwoody: Breaking Military Barriers</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Ann Dunwoody became the first female four-star general in the U.S. Army, raising a family while shattering glass ceilings in a male-dominated field.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Her 37-year career included leading major commands, all while balancing motherhood with a commitment to service and discipline.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Her story motivates mothers to pursue ambitious goals with resilience.</p>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '14px', borderRadius: '5px' }}>Read More</a>
        </div>

        {/* Article 3 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '100%', height: '200px', background: '#e0e0e0', marginBottom: '20px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Jane Goodall: A Mother to Primates</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Jane Goodall revolutionized primatology with her chimpanzee research, raising awareness about conservation while nurturing a legacy of environmental care.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Starting her work in Tanzania in 1960, she balanced motherhood with fieldwork, inspiring global efforts to protect wildlife.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Her dedication continues to influence mothers and conservationists alike.</p>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '14px', borderRadius: '5px' }}>Read More</a>
        </div>

        {/* Article 4 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '100%', height: '200px', background: '#e0e0e0', marginBottom: '20px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Serena Williams: A Champion Mother</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Serena Williams excelled in tennis while raising her daughter, proving that motherhood and athletic greatness can coexist.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>With 23 Grand Slam titles, she returned to the court after childbirth, inspiring mothers to pursue their passions with determination.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Her journey showcases the strength of maternal ambition.</p>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '14px', borderRadius: '5px' }}>Read More</a>
        </div>

        {/* Article 5 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '100%', height: '200px', background: '#e0e0e0', marginBottom: '20px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Michelle Obama: A Voice for Families</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Michelle Obama empowered communities as First Lady, raising her daughters while advocating for health and education.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Through initiatives like Let’s Move!, she promoted active lifestyles, balancing motherhood with public service.</p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Her influence continues to uplift mothers globally.</p>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '14px', borderRadius: '5px' }}>Read More</a>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid #ccc', color: '#999' }}>
          <p style={{ fontSize: '14px' }}>© 2025 Personal Travel Blog</p>
          <div style={{ marginTop: '10px' }}>
            <a href="#" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>Home</a>
            <a href="#" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}